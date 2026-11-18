import { useEffect, useState } from "react";
import { getItems } from "../api";
import { profile } from "../data";
import { ArrowUpRight, Code, Image } from "./Icons";
import SectionTitle from "./SectionTitle";
import TechIcon from "./TechIcon";

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="project">
      <div className="project-thumb">
        {project.imagem_projeto1 ? (
          <img
            src={project.imagem_projeto1}
            alt={`Imagem do projeto ${project.titulo}`}
            loading="lazy"
          />
        ) : (
          <div className="placeholder placeholder-row">
            <Image size={28} strokeWidth={1.5} />
            <span>[ imagem do projeto ]</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <span className="mono-muted">{num}</span>
        <h3 className="project-title">{project.titulo}</h3>
        <div
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: project.descricao }}
        />
        <ul className="tags" aria-label="Tecnologias">
          {(project.tecnologias ?? []).map((t, i) => (
            <li key={i} className="tag">
              <TechIcon name={t.icone} /> {t.nome_tecnologia}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={project.link_projeto}
            className="link-accent"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <a
            href={project.link_github}
            className="link-muted"
            target="_blank"
            rel="noreferrer"
          >
            <Code size={16} strokeWidth={2} /> Código
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems("projetos")
      .then((res) =>
        setItems(Array.isArray(res) ? res : (res.data ?? res.entries ?? [])),
      )
      .catch(console.error);
  }, []);

  return (
    <section
      id="projetos"
      className="container section"
      aria-labelledby="projetos-title"
    >
      <div className="projects-head">
        <SectionTitle
          number="02"
          label="projetos"
          title="Projetos em destaque"
          id="projetos-title"
        />
        <a
          href={profile.github}
          className="link-accent"
          target="_blank"
          rel="noreferrer"
        >
          Ver todos no GitHub <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>
      <div className="projects-grid">
        {items.map((p, i) => (
          <ProjectCard key={i} project={p.content} index={i} />
        ))}
      </div>
    </section>
  );
}
