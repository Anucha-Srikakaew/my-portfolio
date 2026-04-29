"use client";

import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();
  const personal = t.personal;

  return (
    <section id="top" className="hero language-surface">
      <div className="hero-particles" aria-hidden="true">
        <ParticleBackground />
      </div>
      <svg className="hero-geometry" viewBox="0 0 860 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="700" cy="60" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="700" cy="60" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="700" cy="60" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="520" y1="60" x2="880" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <line x1="700" y1="-120" x2="700" y2="240" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="hero-copy">
        <span className="status-badge">{personal.status}</span>
        <h1>{personal.nameEn}</h1>
        <p className="thai-name">{personal.nameTh}</p>
        <p className="hero-role">{personal.role}</p>
        <p className="hero-bio">{personal.bio}</p>

        <div className="hero-actions">
          <a className="primary-link" href={`mailto:${personal.email}`}>
            {t.ui.contact}
          </a>
          <a className="secondary-link" href="#experience">
            {t.ui.viewExperience}
          </a>
          <a className="secondary-link page-link" href="/projects">
            {t.ui.projectList}
          </a>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile summary">
        <ProfilePhoto name={personal.nameEn} />
        <div>
          <span className="meta-label">{t.ui.current}</span>
          <strong>{personal.company}</strong>
          <p className="current-period">{personal.currentPeriod}</p>
        </div>
        <div className="stats-grid">
          <span>
            <strong>{personal.yearsExp}+</strong>
            {t.ui.yearsExp}
          </span>
          <span>
            <strong>{personal.age}</strong>
            {t.ui.age}
          </span>
        </div>
        <div className="contact-stack">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
          <span>{personal.location}</span>
        </div>
      </aside>
    </section>
  );
}
