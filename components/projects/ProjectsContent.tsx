"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n";

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="site-main project-page language-surface">
        <section className="project-hero">
          <p className="eyebrow-text">{t.ui.projectArchive}</p>
          <h1>{t.ui.projectList}</h1>
          <p>{t.projectsIntro}</p>
        </section>

        <section className="section-block">
          <SectionHeader num="01" title={t.ui.allProjects} />
          <div className="project-list">
            {t.projects.map((project, index) => (
              <article className="project-list-card" key={project.id}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-content">
                  <div className="project-topline">
                    <div>
                      <span>{project.type}</span>
                      <h2>{project.name}</h2>
                    </div>
                    <p>{project.period}</p>
                  </div>
                  <div className="project-company">
                    <span>{t.ui.company}</span>
                    <strong>{project.company}</strong>
                  </div>
                  <div className="project-goal">
                    <span>{t.ui.goal}</span>
                    <p>{project.goal}</p>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  {project.features.length ? (
                    <div className="project-detail-block">
                      <span>{t.ui.features}</span>
                      <ul>
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {project.details.length ? (
                    <div className="project-detail-block">
                      <span>{t.ui.details}</span>
                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="project-meta">
                    <strong>
                      {t.ui.role}: {project.role}
                    </strong>
                    <div className="tag-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
