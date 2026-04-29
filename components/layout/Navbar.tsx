"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { t } = useLanguage();
  const navItems = [
    { href: "/#experience", label: t.nav.experience },
    { href: "/#skills", label: t.nav.skills },
    { href: "/projects", label: t.nav.projects },
    { href: "/#ai", label: t.nav.ai },
    { href: "/#vision", label: t.nav.vision },
    { href: "/#education", label: t.nav.education },
  ];

  return (
    <header className="navbar">
      <Link className="brand page-link" href="/#top" aria-label="Go to top">
        A
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link className="page-link" key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="navbar-actions">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
