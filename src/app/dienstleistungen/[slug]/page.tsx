import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Bozo Automobile" };

  const localizedTitles = (["nl", "en", "de"] as const)
    .map((lang) => service.title[lang])
    .join(" · ");
  const localizedDesc = (["nl", "en"] as const)
    .map((lang) => service.shortDescription[lang])
    .join(" | ");

  return {
    title: `${localizedTitles} | Bozo Automobile`,
    description: localizedDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
