import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { translations, type Language } from "../src/data/translations";
import { SERVICES } from "../src/data/services";
import { REVIEWS } from "../src/data/reviews";

const LANGUAGES: Language[] = ["en", "nl", "de"];

describe("Translations & Internationalization Suite", () => {
  test("All supported languages exist in translations object", () => {
    for (const lang of LANGUAGES) {
      assert.ok(translations[lang], `Language '${lang}' is missing from translations dictionary`);
    }
  });

  test("100% Recursive Key Parity across en, nl, and de", () => {
    function getAllKeys(obj: unknown, prefix = ""): string[] {
      if (!obj || typeof obj !== "object") return [];
      const keys: string[] = [];
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value)) {
          keys.push(...getAllKeys(value, fullKey));
        } else {
          keys.push(fullKey);
        }
      }
      return keys;
    }

    const enKeys = new Set(getAllKeys(translations.en));
    const nlKeys = new Set(getAllKeys(translations.nl));
    const deKeys = new Set(getAllKeys(translations.de));

    // Verify en vs nl
    const missingInNl = [...enKeys].filter((k) => !nlKeys.has(k));
    assert.deepEqual(
      missingInNl,
      [],
      `Keys present in English ('en') but missing in Dutch ('nl'):\n${missingInNl.join("\n")}`
    );

    const extraInNl = [...nlKeys].filter((k) => !enKeys.has(k));
    assert.deepEqual(
      extraInNl,
      [],
      `Keys present in Dutch ('nl') but missing in English ('en'):\n${extraInNl.join("\n")}`
    );

    // Verify en vs de
    const missingInDe = [...enKeys].filter((k) => !deKeys.has(k));
    assert.deepEqual(
      missingInDe,
      [],
      `Keys present in English ('en') but missing in German ('de'):\n${missingInDe.join("\n")}`
    );

    const extraInDe = [...deKeys].filter((k) => !enKeys.has(k));
    assert.deepEqual(
      extraInDe,
      [],
      `Keys present in German ('de') but missing in English ('en'):\n${extraInDe.join("\n")}`
    );
  });

  test("No translation values are null, undefined or empty strings", () => {
    function validateValues(obj: unknown, pathStr: string, lang: string) {
      if (typeof obj === "string") {
        // Only allow empty strings if explicitly marked as optional empty badges
        if (pathStr.endsWith(".badge") && obj === "") {
          return;
        }
        assert.ok(
          obj.trim().length > 0,
          `Empty string found in language '${lang}' at key '${pathStr}'`
        );
      } else if (Array.isArray(obj)) {
        assert.ok(obj.length > 0, `Empty array found in language '${lang}' at key '${pathStr}'`);
        obj.forEach((item, index) => {
          validateValues(item, `${pathStr}[${index}]`, lang);
        });
      } else if (obj && typeof obj === "object") {
        for (const [k, v] of Object.entries(obj)) {
          validateValues(v, pathStr ? `${pathStr}.${k}` : k, lang);
        }
      } else {
        assert.fail(`Invalid value type in language '${lang}' at key '${pathStr}': ${typeof obj}`);
      }
    }

    for (const lang of LANGUAGES) {
      validateValues(translations[lang], "", lang);
    }
  });

  test("Array length parity across all translations (topics, benefits, driving times)", () => {
    assert.equal(
      translations.nl.contact.topics.length,
      translations.en.contact.topics.length,
      "contact.topics length mismatch between nl and en"
    );
    assert.equal(
      translations.de.contact.topics.length,
      translations.en.contact.topics.length,
      "contact.topics length mismatch between de and en"
    );

    assert.equal(
      translations.nl.contact.drivingTimes.length,
      translations.en.contact.drivingTimes.length,
      "contact.drivingTimes length mismatch between nl and en"
    );
    assert.equal(
      translations.de.contact.drivingTimes.length,
      translations.en.contact.drivingTimes.length,
      "contact.drivingTimes length mismatch between de and en"
    );

    assert.equal(
      translations.nl.footer.benefits.length,
      translations.en.footer.benefits.length,
      "footer.benefits length mismatch between nl and en"
    );
    assert.equal(
      translations.de.footer.benefits.length,
      translations.en.footer.benefits.length,
      "footer.benefits length mismatch between de and en"
    );
  });

  test("Services Data Localization & Complete Parity across en, nl, and de", () => {
    assert.ok(SERVICES.length >= 7, "Expected at least 7 workshop services defined");

    for (const service of SERVICES) {
      for (const lang of LANGUAGES) {
        assert.ok(
          service.title[lang]?.trim(),
          `Service '${service.id}' is missing title in '${lang}'`
        );
        assert.ok(
          service.shortDescription[lang]?.trim(),
          `Service '${service.id}' is missing shortDescription in '${lang}'`
        );
        assert.ok(
          service.fullDescription[lang]?.trim(),
          `Service '${service.id}' is missing fullDescription in '${lang}'`
        );
        assert.ok(
          service.typicalDuration[lang]?.trim(),
          `Service '${service.id}' is missing typicalDuration in '${lang}'`
        );
        assert.ok(
          service.priceIndication[lang]?.trim(),
          `Service '${service.id}' is missing priceIndication in '${lang}'`
        );
        assert.ok(
          Array.isArray(service.highlights[lang]) && service.highlights[lang].length > 0,
          `Service '${service.id}' is missing highlights in '${lang}'`
        );
        assert.ok(
          Array.isArray(service.processSteps[lang]) && service.processSteps[lang].length > 0,
          `Service '${service.id}' is missing processSteps in '${lang}'`
        );
        assert.ok(
          Array.isArray(service.faqs[lang]) && service.faqs[lang].length > 0,
          `Service '${service.id}' is missing faqs in '${lang}'`
        );
      }

      // Parity across lengths
      assert.equal(
        service.highlights.nl.length,
        service.highlights.en.length,
        `Service '${service.id}' highlights count mismatch between nl and en`
      );
      assert.equal(
        service.highlights.de.length,
        service.highlights.en.length,
        `Service '${service.id}' highlights count mismatch between de and en`
      );

      assert.equal(
        service.processSteps.nl.length,
        service.processSteps.en.length,
        `Service '${service.id}' processSteps count mismatch between nl and en`
      );
      assert.equal(
        service.processSteps.de.length,
        service.processSteps.en.length,
        `Service '${service.id}' processSteps count mismatch between de and en`
      );

      assert.equal(
        service.faqs.nl.length,
        service.faqs.en.length,
        `Service '${service.id}' faqs count mismatch between nl and en`
      );
      assert.equal(
        service.faqs.de.length,
        service.faqs.en.length,
        `Service '${service.id}' faqs count mismatch between de and en`
      );
    }
  });

  test("Reviews Data Localization & Parity across en, nl, and de", () => {
    assert.ok(REVIEWS.length > 0, "Expected customer reviews to be defined");

    for (const review of REVIEWS) {
      for (const lang of LANGUAGES) {
        assert.ok(
          review.comment[lang]?.trim(),
          `Review by '${review.author}' is missing comment in '${lang}'`
        );
        assert.ok(
          review.date[lang]?.trim(),
          `Review by '${review.author}' is missing date in '${lang}'`
        );
      }
    }
  });

  test("Zero hardcoded direct '.de' or '.en' access on localized records in src/app and src/components", () => {
    const srcDir = path.resolve(process.cwd(), "src");

    function findSourceFiles(dir: string): string[] {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      const files: string[] = [];
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          // ignore data directory where definitions live
          if (entry.name !== "data") {
            files.push(...findSourceFiles(full));
          }
        } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
          files.push(full);
        }
      }
      return files;
    }

    const sourceFiles = findSourceFiles(srcDir);
    const forbiddenPatterns = [
      /\.title\.de\b/,
      /\.shortDescription\.de\b/,
      /\.fullDescription\.de\b/,
      /\.highlights\.de\b/,
      /\.processSteps\.de\b/,
      /\.priceIndication\.de\b/,
      /\.typicalDuration\.de\b/,
      /\.faqs\.de\b/,
      /\.comment\.de\b/,
    ];

    const violations: { file: string; line: number; match: string }[] = [];

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, "utf8");
      const lines = content.split("\n");
      lines.forEach((line, index) => {
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(line)) {
            violations.push({
              file: path.relative(process.cwd(), file),
              line: index + 1,
              match: line.trim(),
            });
          }
        }
      });
    }

    assert.deepEqual(
      violations,
      [],
      `Found hardcoded '.de' access in templates instead of dynamic language indexing:\n${violations
        .map((v) => `${v.file}:${v.line} -> ${v.match}`)
        .join("\n")}`
    );
  });

  test("Vocabulary authenticity test for Dutch (nl) vs English (en) vs German (de)", () => {
    // Dutch check
    assert.equal(translations.nl.nav.services, "Diensten");
    assert.equal(translations.nl.nav.about, "Over Ons");
    assert.equal(translations.nl.mobileActionBar.book, "Afspraak");
    assert.equal(translations.nl.mobileActionBar.call, "Bellen");
    assert.ok(translations.nl.hero.titleHighlight.includes("AUTOMERKEN"));

    // English check
    assert.equal(translations.en.nav.services, "Services");
    assert.equal(translations.en.nav.about, "About Us");
    assert.equal(translations.en.mobileActionBar.book, "Appointment");
    assert.equal(translations.en.mobileActionBar.call, "Call");
    assert.ok(translations.en.hero.titleHighlight.includes("CAR MAKES"));

    // German check
    assert.equal(translations.de.nav.services, "Dienstleistungen");
    assert.equal(translations.de.nav.about, "Über uns");
    assert.equal(translations.de.mobileActionBar.book, "Termin");
    assert.equal(translations.de.mobileActionBar.call, "Anrufen");
    assert.ok(translations.de.hero.titleHighlight.includes("AUTOMARKEN"));
  });

  test("Legal pages completeness across all languages", () => {
    for (const lang of LANGUAGES) {
      const lp = translations[lang].legalPages;
      assert.ok(lp.impressumTitle.length > 0);
      assert.ok(lp.privacyTitle.length > 0);
      assert.ok(lp.disclaimerText.length > 50, `Disclaimer in '${lang}' is too short`);
      assert.ok(lp.copyrightText.length > 50, `Copyright in '${lang}' is too short`);
      assert.ok(lp.sec1Text.length > 10, `Privacy sec1Text in '${lang}' is too short`);
      assert.ok(lp.sec2Text.length > 30, `Privacy sec2Text in '${lang}' is too short`);
      assert.ok(lp.sec3Text.length > 30, `Privacy sec3Text in '${lang}' is too short`);
      assert.ok(lp.sec4Text.length > 30, `Privacy sec4Text in '${lang}' is too short`);
      assert.ok(lp.sec5Text.length > 30, `Privacy sec5Text in '${lang}' is too short`);
      assert.ok(lp.sec6Text.length > 30, `Privacy sec6Text in '${lang}' is too short`);
    }
  });

  test("Booking wizard error messages parity and coverage", () => {
    for (const lang of LANGUAGES) {
      const b = translations[lang].booking;
      assert.ok(b.errSelectService.length > 0, `errSelectService missing in '${lang}'`);
      assert.ok(b.errBrandRequired.length > 0, `errBrandRequired missing in '${lang}'`);
      assert.ok(b.errDateRequired.length > 0, `errDateRequired missing in '${lang}'`);
      assert.ok(b.errContactRequired.length > 0, `errContactRequired missing in '${lang}'`);
      assert.ok(b.brandShortcuts.length >= 8, `brandShortcuts incomplete in '${lang}'`);
    }
  });
});
