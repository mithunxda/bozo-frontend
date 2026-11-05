"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Language, translations, Translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  region: string;
  setRegion: (region: string) => void;
  t: Translations;
  availableRegions: { id: string; name: string }[];
}

const availableRegions = [
  { id: "limmattal", name: "Schlieren & Limmattal" },
  { id: "unterengstringen", name: "Unterengstringen" },
  { id: "zurich", name: "Zürich & Umgebung" },
  { id: "dietikon", name: "Dietikon & Urdorf" },
];

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", callback);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", callback);
    }
  };
}

function getClientLanguage(): Language {
  if (typeof window === "undefined") return "de";
  try {
    const stored = localStorage.getItem("bozo_lang");
    if (stored === "de" || stored === "en" || stored === "nl") return stored as Language;
  } catch {
    // ignore
  }
  return "de";
}

function getServerLanguage(): Language {
  return "de";
}

function getClientRegion(): string {
  if (typeof window === "undefined") return "limmattal";
  try {
    const stored = localStorage.getItem("bozo_region");
    if (stored) return stored;
  } catch {
    // ignore
  }
  return "limmattal";
}

function getServerRegion(): string {
  return "limmattal";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getClientLanguage,
    getServerLanguage
  );

  const region = useSyncExternalStore(
    subscribe,
    getClientRegion,
    getServerRegion
  );

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("bozo_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
    notify();
  };

  const setRegion = (newRegion: string) => {
    try {
      localStorage.setItem("bozo_region", newRegion);
    } catch {
      // ignore
    }
    notify();
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        region,
        setRegion,
        t,
        availableRegions,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
