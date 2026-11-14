import { contact, profile } from '../data'
import { Mail } from './Icons'

export default function Contact() {
  return (
    <section id="contato" className="container contact-section" aria-labelledby="contato-title">
      <div className="contact">
        <span className="eyebrow">
          <span className="eyebrow-num">05</span> / contato
        </span>
        <h2 id="contato-title" className="contact-title">
          {contact.title}
        </h2>
        <p className="contact-text">{contact.text}</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
            <Mail size={18} strokeWidth={2} /> {profile.email}
          </a>
          <a href={profile.linkedin} className="btn btn-outline btn-lg" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} className="btn btn-outline btn-lg" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
