"use client";

import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const personal = t.personal;

  return (
    <footer className="footer">
      <span>{personal.nameEn}</span>
      <a href={`mailto:${personal.email}`}>{personal.email}</a>
    </footer>
  );
}
