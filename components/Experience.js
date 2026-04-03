export default function Experience() {
  const experiences = [
    {
      number: '1',
      role: 'Freelance Web Developer',
      company: 'Agentryx — Remote',
      duration: '2024 - Present',
    },
    {
      number: '2',
      role: 'Freelance Developer & Designer',
      company: 'Qalam Web Studio — Remote',
      duration: '2024 - Present',
    },
    {
      number: '3',
      role: 'WordPress Developer',
      company: 'Compex Solution — India',
      duration: '2023 - 2024',
    },
  ]

  return (
    <section className="experience" id="experience">
      {/* Decorative sun icon */}
      <div className="exp-icon-sun reveal-spin" data-reveal="" data-delay="0">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="1.5" fill="black" />
          {Array.from({ length: 24 }, (_, i) => (
            <line
              key={i}
              x1="50" y1="50" x2="50" y2="20"
              stroke="black" strokeWidth="0.5"
              transform={`rotate(${i * 15} 50 50)`}
              opacity="0.3"
            />
          ))}
          <circle cx="50" cy="50" r="8" stroke="black" strokeWidth="0.5" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="15" stroke="black" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </div>

      {/* Decorative stripes */}
      <div className="exp-icon-stripes">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="40" />
            </clipPath>
          </defs>
          <g clipPath="url(#circleClip)">
            {Array.from({ length: 12 }, (_, i) => (
              <line
                key={i}
                x1="-20" y1={i * 10} x2="120" y2={40 + i * 10}
                stroke="black" strokeWidth="4"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="exp-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="section-title">EXPERIENCE</h2>
        <p className="section-desc">
          Practical experience building real-world projects and professional solutions.
        </p>
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className={`exp-item ${i === 0 ? 'active' : ''} reveal-left-item`} data-reveal="" data-delay={String(i * 200)}>
            <div className="exp-left">
              <div className="exp-num-box">
                <span>{exp.number}</span>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
            </div>
            <div className="exp-right">
              <div className="exp-separator" />
              <p className="exp-duration">JOB DURATION - {exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
