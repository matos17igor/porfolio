import { profile, projects } from '../data'
import { ArrowUpRight, Code, Image } from './Icons'
import SectionTitle from './SectionTitle'

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <article className="project">
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={`Imagem do projeto ${project.title}`} loading="lazy" />
        ) : (
          <div className="placeholder placeholder-row">
            <Image size={28} strokeWidth={1.5} />
            <span>[ imagem do projeto ]</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <span className="mono-muted">{num}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <ul className="tags" aria-label="Tecnologias">
          {project.tags.map((t, i) => (
            <li key={i} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.demo} className="link-accent" target="_blank" rel="noreferrer">
            Ver projeto <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <a href={project.code} className="link-muted" target="_blank" rel="noreferrer">
            <Code size={16} strokeWidth={2} /> Código
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="container section" aria-labelledby="projetos-title">
      <div className="projects-head">
        <SectionTitle number="02" label="projetos" title="Projetos em destaque" id="projetos-title" />
        <a href={profile.github} className="link-accent" target="_blank" rel="noreferrer">
          Ver todos no GitHub <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
