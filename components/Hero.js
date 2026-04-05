export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Gradient blob */}
      <div className="hero-blob" />

      {/* Background decorative elements */}
      <div className="hero-bg-elements">
        <div className="hero-line line-1" />
        <div className="hero-line line-2" />
        <svg
          className="shape-curve"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ position: 'absolute', top: '15%', right: '10%', opacity: 0.1 }}
        >
          <path d="M10 50C10 30 30 10 50 10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Left content */}
      <div className="hero-left">
        <div className="hero-emoji reveal-rotate" data-hero="200">👋</div>

        <h1 className="reveal-up" data-hero="400">
          Hello! <strong>I&apos;m Taxil</strong>
        </h1>

        <div className="hero-subtitle reveal-left" data-hero="600">
          <span className="subtitle-dash">————</span>
          Full Stack Developer &amp; AI-Powered Builder
        </div>

        <p className="hero-desc reveal-up" data-hero="800">
          Hello! I&apos;m Taxil. I&apos;m a <strong>Next.js developer</strong>
        </p>

        <ul className="hero-checklist">
          {[
            'Next.js & WordPress — fast, modern websites from scratch',
            'AI Chatbot & Workflow Integration for businesses',
            'Responsive, SEO-friendly & conversion-focused builds',
          ].map((item, i) => (
            <li key={item} className="reveal-check" data-hero={String(1000 + i * 150)}>{item}</li>
          ))}
        </ul>

        <div className="hero-btns reveal-up" data-hero="1500">
          <a href="#contact" className="btn-primary">
            Let&apos;s Talk
          </a>
          <a href="/resume.pdf" download className="btn-download">
            Download CV ↓
          </a>
        </div>
      </div>

      {/* Right - Photo */}
      <div className="hero-right reveal-right" data-hero="600">
        <div className="hero-img-container">
          <img
            src="https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fhero-photo.jpg&w=1080&q=75"
            alt="Taxil"
            className="hero-photo"
            fetchPriority="high"
            width={500}
            height={600}
          />
          <div className="hero-badge-hello reveal-bounce" data-hero="1200">
            <span>Hello</span>
          </div>
          <div className="bg-shape-squiggly">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
              <path
                d="M10 10C30 15 30 25 10 30C-10 35 -10 45 10 50C30 55 30 65 10 70"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
