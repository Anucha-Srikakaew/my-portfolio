"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Education() {
  const { t } = useLanguage();

  return (
    <Reveal id="education" className="section-block language-surface">
      <SectionHeader num="05" title={t.sections.education} />
      <div className="education-grid">
        <div className="education-list">
          {t.education.map((item) => (
            <article className="education-card" key={`${item.period}-${item.degree}`}>
              <span>{item.period}</span>
              <h2>{item.degree}</h2>
              <p>{item.institution}</p>
              {item.detail ? <small>{item.detail}</small> : null}
            </article>
          ))}
        </div>
        <div className="language-card">
          {t.languages.map((language) => (
            <div className="language-row" key={language.name}>
              <div>
                <h3>{language.name}</h3>
                <strong>{language.label}</strong>
                <p>{language.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
