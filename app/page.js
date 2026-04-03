import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Animations from '@/components/Animations'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Animations />
      <Navbar />
      <Hero />

      {/* Category marquee bar */}
      <div className="category-bar">
        <div className="category-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="category-item-group">
              {['WEB DESIGN', 'APP DESIGN', 'DEVELOPMENT', 'WEB FLOW', 'BRANDING'].map((item) => (
                <div key={item + i} style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
                  <span className="category-item">{item}</span>
                  <span className="category-star">✧</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Services />
      <Pricing />
      <Experience />
      <Education />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
