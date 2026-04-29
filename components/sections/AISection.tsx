"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function AISection() {
  const { t } = useLanguage();
  const aiSection = t.ai;

  return (
    <Reveal id="ai" className="section-block ai-block language-surface">
      <SectionHeader num="03" title={t.sections.ai} />
      <div className="ai-intro">
        <h2>{aiSection.headline}</h2>
        <p>{aiSection.description}</p>
      </div>
      <div className="ai-card-grid">
        {aiSection.cards.map((card) => (
          <article className="ai-card" key={card.name}>
            <h3>{card.name}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
      <div className="tag-list ai-tags">
        {aiSection.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </Reveal>
  );
}
