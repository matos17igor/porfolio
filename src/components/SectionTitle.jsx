export default function SectionTitle({ number, label, title, id }) {
  return (
    <div className="section-title">
      <span className="eyebrow">
        <span className="eyebrow-num">{number}</span> / {label}
      </span>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
