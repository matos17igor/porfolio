import { experience, skills } from '../data'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experiencia" className="band">
      <div className="container experience">
        <div className="experience-col" aria-labelledby="exp-title" role="region">
          <SectionTitle number="03" label="experiência" title="Trajetória" id="exp-title" />
          <ol className="timeline">
            {experience.map((job, i) => (
              <li key={i} className="timeline-item">
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <span className="mono-muted">{job.period}</span>
                  <h3 className="timeline-role">
                    {job.role} <span className="timeline-company">· {job.company}</span>
                  </h3>
                  <p className="timeline-desc">{job.description}</p>
                  {job.topics && (
                    <ul className="timeline-topics">
                      {job.topics.map((t, j) => (
                        <li key={j}>
                          <strong>{t.title}:</strong> {t.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="skills-col" aria-labelledby="skills-title" role="region">
          <SectionTitle number="04" label="habilidades" title="Ferramentas" id="skills-title" />
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <span className="label">{g.group}</span>
              <ul className="chips">
                {g.items.map((s, i) => (
                  <li key={i} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
