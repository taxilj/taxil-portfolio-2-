export default function Stats() {
  const testimonials = [
    {
      quote: "Taxil has a great eye for detail and delivered a premium placement website for us. Truly professional and creative.",
      author: "RedSky Team",
      title: "CEO, RedSky Placement",
    },
    {
      quote: "Taxil built our agency website with a clean design and smooth performance. Highly recommend for Next.js projects.",
      author: "Qalam Web Studio Team",
      title: "Founder, Qalam Web Studio",
    },
    {
      quote: "Great communication and delivered exactly what we needed. Our WordPress site looks modern and loads fast now.",
      author: "Compex Solution",
      title: "Manager, Compex Solution",
    },
  ]

  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '15+', label: 'Satisfied Clients' },
    { value: '2+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <>
      {/* Testimonial section */}
      <section className="feedback" id="testimonials">
        <div className="feedback-inner reveal-up" data-reveal="" data-delay="0">
          <div className="feedback-top">
            <div className="feedback-label reveal-left" data-reveal="" data-delay="100">CLIENT FEEDBACK</div>
            <div className="feedback-deco-cross reveal-cross" data-reveal="" data-delay="200">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17Z" fill="black" />
              </svg>
            </div>
          </div>

          <div className="feedback-body">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal-card" data-reveal="" data-delay={String(i * 150)}>
                <div className="feedback-quote">
                  &ldquo;{t.quote}&rdquo;
                </div>
                <div>
                  <div className="feedback-author">
                    <strong>{t.author}</strong>
                    <span>{t.title}</span>
                  </div>
                  <div className="feedback-squiggly">
                    <svg width="80" height="15" viewBox="0 0 120 20">
                      <path d="M0 10C10 5 10 15 20 10C30 5 30 15 40 10C50 5 50 15 60 10C70 5 70 15 80 10" stroke="black" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item reveal-scale-up" data-reveal="" data-delay={String(i * 150)}>
              <div className="stat-icon">
                {i === 0 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M12 2l1 2.5L12 6l-1-1.5z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                )}
                {i === 3 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
              <div className="stat-num">{stat.value}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
