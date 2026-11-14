import { about } from '../data'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="sobre" className="band" aria-labelledby="sobre-title">
      <div className="container about">
        <div className="about-head">
          <SectionTitle number="01" label="sobre" title="Um pouco sobre mim" id="sobre-title" />
        </div>
        <div className="about-body">
          <p className="about-text">{about.text}</p>
          <div className="facts">
            {about.facts.map((f) => (
              <div key={f.label} className="card fact">
                <span className="label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
