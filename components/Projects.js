const projects = [
  {
    title: 'Wedding Bio-Data Websites',
    tag: 'Next.js',
    description: 'Personalized wedding portfolio sites — for couples with fixed dates & for those still searching',
    image: 'https://placehold.co/1200x750/f5f5f5/1a1a1a?text=Wedding+Bio-Data',
    inProgress: true,
  },
  {
    title: 'RedSky Placement Website',
    tag: 'Next.js',
    description: 'Modern UI with improved structure and clarity',
    caseStudy: [
      'Challenge: Client had no online presence and was losing leads.',
      'Solution: Built a fast Next.js site with job listings & contact flow.',
      'Result: Professional online presence live within 2 weeks.',
    ],
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fredsky.jpg&w=1200&q=75',
    link: 'https://redskyplacement.in/',
  },
  {
    title: 'Tirth Photography',
    tag: 'Next.js',
    description: 'Image-focused portfolio with smooth browsing experience',
    caseStudy: [
      'Challenge: Photographer needed an image-heavy site that loads fast.',
      'Solution: Next.js with optimized image gallery & smooth navigation.',
      'Result: Portfolio site that loads 3x faster than average.',
    ],
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Ftirth.jpg&w=1200&q=75',
    link: 'https://tirthphotography.in/',
  },
  {
    title: 'Qalam Web Studio',
    tag: 'Next.js',
    description: 'Strong visual identity with clean layout',
    caseStudy: [
      'Challenge: Agency needed a strong online identity to attract clients.',
      'Solution: Built Next.js site with brand-focused modern design.',
      'Result: Clean, fast agency site live and converting in 10 days.',
    ],
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fqalam.jpg&w=1200&q=75',
    link: 'https://www.qalamwebstudio.online/',
  },
  {
    title: 'Skyx Website',
    tag: 'WordPress',
    description: 'Responsive layout with improved structure',
    caseStudy: [
      'Challenge: No responsive mobile version, poor user experience.',
      'Solution: WordPress rebuild with mobile-first layout approach.',
      'Result: 2x better mobile usability and engagement.',
    ],
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fskyx.jpg&w=1200&q=75',
    link: 'https://skyx.great-site.net/',
  },
  {
    title: 'Compex Solution',
    tag: 'WordPress',
    description: 'Clean UI with better readability',
    caseStudy: [
      'Challenge: Outdated design losing credibility with potential clients.',
      'Solution: Modern WordPress redesign with clear, professional UI.',
      'Result: Professional site with improved readability and trust.',
    ],
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fcompex.jpg&w=1200&q=75',
    link: 'https://compexsolution.com/',
  },
]

export default function Projects() {
  return (
    <section className="case-study" id="work">
      <div className="cs-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="cs-list">
        {projects.map((p, i) => (
          <div key={i} className={`cs-row ${i % 2 === 1 ? 'reverse' : ''} reveal-project`} data-reveal="" data-delay={String(i * 150)}>
            <div className="cs-image-wrap">
              <div className="cs-image-container">
                <img
                  src={p.image}
                  alt={p.title}
                  className="cs-project-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cs-content">
              <span className="cs-tech-tag">{p.tag}</span>
              <h3 className="cs-project-title">{p.title}</h3>
              <p className="cs-project-desc">{p.description}</p>
              {p.caseStudy && (
                <div style={{ marginBottom: '32px', borderLeft: '2px solid var(--gray-200)', paddingLeft: '20px' }}>
                  {p.caseStudy.map((line, idx) => (
                    <p key={idx} style={{ fontSize: '13px', color: 'var(--gray-500)', lineHeight: '1.6', margin: '4px 0' }}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
              {p.inProgress ? (
                <span className="cs-in-progress-badge">🚧 In Progress</span>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="cs-link">
                  View Project ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
