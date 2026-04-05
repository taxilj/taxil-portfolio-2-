export default function Footer() {
  return (
    <footer className="footer-new reveal-fade" data-reveal="" data-delay="0">
      <div className="footer-deco">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17Z" fill="black" />
        </svg>
      </div>
      <div className="footer-divider" />
      <div className="footer-row">
        <div className="footer-left">
          <div className="footer-tagline" style={{ marginBottom: '12px', fontSize: '13px', fontWeight: '600', color: 'var(--black)', opacity: 0.8 }}>
            Open to full-time roles & freelance projects worldwide 🌍
          </div>
          <div className="footer-socials">
            <a href="https://github.com/taxilj" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/takshil-prajapati-16bba5298" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/takshil52" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/919104980549" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-copy-new">© 2026 Taxil. All rights reserved.</div>
      </div>
    </footer>
  )
}
