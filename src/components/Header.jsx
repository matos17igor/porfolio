import { useEffect, useState } from 'react'
import { profile } from '../data'
import { Close, Menu } from './Icons'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  // Fecha o menu mobile ao pressionar Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="header">
      <nav className="container nav" aria-label="Principal">
        <a href="#topo" className="logo" onClick={close}>
          {profile.initials}
          <span className="accent">.</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
        </button>

        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contato" className="nav-cta" onClick={close}>
            Fale comigo
          </a>
        </div>
      </nav>
    </header>
  )
}
