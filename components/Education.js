export default function Education() {
  const education = [
    {
      number: '1',
      role: 'MCA — Master of Computer Application',
      company: 'Ganpat University — Gujarat, India',
      duration: '2024 - Pursuing',
    },
    {
      number: '2',
      role: 'BCA — Bachelor of Computer Application',
      company: 'Ganpat University — Gujarat, India',
      duration: '2021 - 2024',
    },
  ]

  return (
    <section className="experience" id="education">
      <div className="exp-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="section-title">EDUCATION</h2>
        <p className="section-desc">
          Academic background and qualifications supporting my technical expertise.
        </p>
      </div>

      <div className="exp-list">
        {education.map((edu, i) => (
          <div key={i} className={`exp-item ${i === 0 ? 'active' : ''} reveal-left-item`} data-reveal="" data-delay={String(i * 200)}>
            <div className="exp-left">
              <div className="exp-num-box">
                <span>{edu.number}</span>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">{edu.role}</h3>
                <p className="exp-company">{edu.company}</p>
              </div>
            </div>
            <div className="exp-right">
              <div className="exp-separator" />
              <p className="exp-duration">DURATION - {edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
