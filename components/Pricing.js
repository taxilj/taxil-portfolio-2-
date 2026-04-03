export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '₹8,000',
      subtitle: 'Perfect for small businesses',
      features: [
        'Single Page Website',
        'WordPress or Landing Page',
        'Mobile Responsive',
        'Basic SEO Setup',
        '1 Revision Round',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹18,000',
      subtitle: 'For growing businesses',
      features: [
        'Full Website (5-7 pages)',
        'Built with Next.js',
        'Mobile Responsive',
        'SEO Optimized',
        'Contact Form Integration',
        '3 Revision Rounds',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹35,000+',
      subtitle: 'AI-powered & custom solutions',
      features: [
        'Custom Next.js Website',
        'AI Chatbot Integration',
        'Advanced Animations',
        'CMS / Dashboard',
        'Priority Support',
        'Unlimited Revisions',
      ],
      cta: "Let's Talk",
      popular: false,
    },
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="section-title">PRICING</h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Simple &amp; Transparent Pricing
        </p>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`pricing-card ${tier.popular ? 'popular' : ''} reveal-card`}
            data-reveal=""
            data-delay={String(i * 150)}
          >
            {tier.popular && <div className="pricing-badge">Most Popular</div>}
            <div className="pricing-tier">{tier.name}</div>
            <div className="pricing-amt">{tier.price}</div>
            <div className="pricing-subtitle">{tier.subtitle}</div>

            <ul className="pricing-features">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a href="#contact" className="pricing-btn">
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="pricing-note reveal-up" data-reveal="" data-delay="600">
        All prices are starting prices. Final quote depends on project scope.
      </p>
    </section>
  )
}
