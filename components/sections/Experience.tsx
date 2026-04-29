"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Reveal id="experience" className="section-block language-surface">
      <SectionHeader num="01" title={t.sections.experience} />
      <div className="experience-list">
        {t.experiences.map((item) => (
          <article className="experience-card" key={item.id}>
            <div className="experience-topline">
              <div>
                <h2>{item.role}</h2>
                <p>{item.company}</p>
              </div>
              <span className={item.isCurrent ? "period current" : "period"}>{item.period}</span>
            </div>
            <p className="experience-desc">{item.description}</p>
            {"responsibilities" in item && item.responsibilities?.length ? (
              <ul className="responsibility-list">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            ) : null}
            <div className="tag-list">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
