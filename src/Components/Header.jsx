import { useState } from "react"; import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaStarHalfAlt, } from "react-icons/fa";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [showLogoMessage, setShowLogoMessage] = useState(false);

  const closeMenu = () => { setMenuOpen(false); };

  return ( <header className="header">

    <a href="#home" className="logo" onClick={closeMenu} onMouseEnter={() => setShowLogoMessage(true)} onMouseLeave={() => setShowLogoMessage(false)} >
<span   className="logo-tech">→   </span>
      <span className="logo-D">D</span> <span className="logo-tech">tech</span>

      {showLogoMessage && ( <span className="logo-tooltip"> Hi,Do you like what you see?</span> )} </a>

   
  
      {/* Hamburger button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dark overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sliding sidebar */}
      <aside className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>

        {/* Sidebar header */}
        <div className="sidebar-header">
          <span>Menu</span>

          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="mobile-nav-links">

            <li>
              <a href="#home" onClick={closeMenu}>
                <FaHome />
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                <FaUser />
                <span>About</span>
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                <FaCode />
                <span>Skills</span>
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                <FaBriefcase />
                <span>Projects</span>
              </a>
            </li>

              <li>
              <a href="#reviews" onClick={closeMenu}>
                <FaStarHalfAlt/>
                <span>Reviews</span>
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                <FaEnvelope />
                <span>Contact Me</span>
              </a>
            </li>

          </ul>
        </nav>

      </aside>

    </header>
  )
}

export default Header