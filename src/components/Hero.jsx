import { profile } from '../data'
import { ArrowRight, Download, GitHub, LinkedIn, Mail, User } from './Icons'

export default function Hero() {
  return (
    <section id="topo" className="container hero">
      <div className="hero-text">
        {profile.available && (
          <div className="badge">
            <span className="badge-dot" aria-hidden="true" />
            {profile.availableText}
          </div>
        )}

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos <ArrowRight size={18} strokeWidth={2} />
          </a>
          <a href={profile.resume} className="btn btn-outline" download>
            <Download size={18} strokeWidth={2} /> Baixar currículo
          </a>
        </div>

        <div className="hero-social">
          <a href={profile.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
          <a href={profile.linkedin} className="icon-btn" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
          <a href="#contato" className="icon-btn" aria-label="E-mail">
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <div className="hero-photo-outline" aria-hidden="true" />
          <div className="hero-photo-frame">
            {profile.photo ? (
              <img src={profile.photo} alt={`Foto de ${profile.name}`} />
            ) : (
              <div className="placeholder">
                <User size={56} strokeWidth={1.4} />
                <span>[ sua foto ]</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
