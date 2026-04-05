export default function Skills() {
  const skills = [
    { name: 'Next.js', icon: '⬢' },
    { name: 'React.js', icon: '⚛' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Tailwind CSS', icon: 'TW' },
    { name: 'Node.js', icon: '⬢' },
    { name: 'WordPress', icon: 'WP' },
    { name: 'MongoDB', icon: '◉' },
    { name: 'AI Integration', icon: '✨' },
    { name: 'REST APIs', icon: '⇄' },
    { name: 'Git', icon: '⬡' },
    { name: 'Figma', icon: '◈' },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-header reveal-up" data-reveal="" data-delay="0">
        <div className="section-label">MY SKILLS</div>
        <div className="section-deco-cross">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17Z" fill="black" />
          </svg>
        </div>
      </div>
      <div className="skills-grid reveal-up" data-reveal="" data-delay="100">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-tag">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}