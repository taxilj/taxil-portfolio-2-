export default function Services() {
  return (
    <section className="services" id="services">
      {/* Top strip with socials + email */}
      <div className="services-top-strip reveal-up" data-reveal="" data-delay="0">
        <div className="strip-socials">
          <a href="https://github.com/taxilj" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/takshil-prajapati-16bba5298" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/takshil52" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="strip-line" />
        <div className="strip-contact">
          <a href="mailto:takshilprajapati2004@gmail.com">✉ TAKSHILPRAJAPATI2004@GMAIL.COM</a>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="services-breadcrumb reveal-left" data-reveal="" data-delay="100">
        <div className="breadcrumb-line" />
        <span>MY SERVICES</span>
      </div>

      {/* Header */}
      <div className="services-header">
        <div className="services-title-area reveal-up" data-reveal="" data-delay="0">
          <h2 className="section-title">
            WHAT I&apos;M
            <br />
            OFFERING
          </h2>
        </div>
        <div className="services-desc-area reveal-up" data-reveal="" data-delay="150">
          <p className="section-desc">
            Fast, modern & AI-powered websites that help your business grow — built with Next.js, WordPress & smart automation.
          </p>
        </div>
        <div className="services-action reveal-scale" data-reveal="" data-delay="300">
          <a href="#contact" className="btn-all-service">View All Services</a>
        </div>
      </div>

      {/* Content */}
      <div className="services-content-wrapper">
        {/* Scroll indicator */}
        <div className="scroll-indicator reveal-fade" data-reveal="" data-delay="200">
          <div className="scroll-text">SCROLL DOWN</div>
          <div className="scroll-line" />
          <div className="scroll-arrow">↓</div>
        </div>

        {/* Cards grid */}
        <div className="services-grid">
          <div className="service-card reveal-card" data-reveal="" data-delay="0">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="service-title">Next.js &amp; WordPress</h3>
            <p className="service-card-desc" style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
              Custom websites built for speed, SEO &amp; scalability.
            </p>
          </div>

          <div className="service-card reveal-card" data-reveal="" data-delay="200">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="service-title">AI Workflows &amp; Prompts</h3>
            <p className="service-card-desc" style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
              Smart AI integrations, chatbots &amp; automation for your business.
            </p>
          </div>

          <div className="service-card reveal-card" data-reveal="" data-delay="400">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="service-title">Rapid Prototyping</h3>
            <p className="service-card-desc" style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
              From idea to live website — fast, focused & built to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
