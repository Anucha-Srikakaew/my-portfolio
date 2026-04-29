"use client";

import { RoadmapItem } from "@/components/ui/RoadmapItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Vision() {
  const { t } = useLanguage();

  return (
    <Reveal id="vision" className="section-block language-surface">
      <SectionHeader num="04" title={t.sections.vision} />
      <div className="vision-grid">
        <blockquote className="quote-card">
          <p>{t.quote.text}</p>
          <cite>{t.quote.author}</cite>
        </blockquote>
        <div className="roadmap-list">
          {t.roadmap.map((item, index) => (
            <RoadmapItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
