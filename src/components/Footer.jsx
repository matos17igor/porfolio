import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#topo">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
