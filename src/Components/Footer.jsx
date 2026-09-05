function Footer() {
  return (
    <footer className="footer">

      {/* Footer brand */}
      <div className="footer-brand">
        <a href="#home" className="footer-logo">
           <span className="logo-D">D</span>
    <span className="logo-tech">tech</span>
        </a>

        <p>
          Building modern and meaningful digital experiences  <span className="main-back">.</span>
        </p>
      </div>

      {/* Footer navigation */}
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Dtech.&lt;/&gt;. All rights reserved.</p>


<a href="#home" className="back-to-top">
  ↑
</a>
      </div>

    </footer>
  )
}

export default Footer