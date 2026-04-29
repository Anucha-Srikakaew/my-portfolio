"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Reveal id="skills" className="section-block language-surface">
      <SectionHeader num="02" title={t.sections.skills} />
      <div className="skills-grid">
        {t.skills.map((group) => (
          <article className="skill-group" key={group.category}>
            <h2>{group.category}</h2>
            <p>{group.focus}</p>
            <div className="skill-chip-list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
