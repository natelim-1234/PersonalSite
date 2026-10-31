import './CaseStudyMeta.css'

function CaseStudyMeta({ items }) {
  return (
    <div className="case-study-meta-row">
      {items.map(({ label, value }) => (
        <div className="case-study-meta-item" key={label}>
          <p className="case-study-meta-label">{label}</p>
          <p className="case-study-meta-value">{value}</p>
        </div>
      ))}
    </div>
  )
}

export default CaseStudyMeta
