"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const nextLocale = locale === "th" ? "en" : "th";

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => setLocale(nextLocale)}
      aria-label={t.ui.toggleLanguage}
      title={t.ui.toggleLanguage}
    >
      <span className={locale === "th" ? "active" : ""}>TH</span>
      <span className={locale === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
