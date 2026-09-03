import react from "react"
import {typewriter} from "react-simple-typewriter"

function Home() {
  return (
    <section id="home" className="home">

      {/* Decorative background elements */}
      <div className="home-glow glow-one"></div>
      <div className="home-glow glow-two"></div>

      {/* Main hero content */}
      <div className="home-content">

        {/* Small status badge */}
        <div className="home-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        {/* Main introduction */}
        <p className="home-greeting">
          Hello, I'm
        </p>

        {/* Your name */}
        <h1>Chima <span>Eze</span>
         {/* <Typewriter
         word={["Chima Eze","David Eze", "a Developer", "a Designer"]}
         loop={true}
         cursor
         cursorStyle="|"
         typeSpeed={70}
         deleteSpeed={50}
         delaySpeed={1000}
         /> */}

        </h1>

        {/* Main profession */}
        <h2>
          Full-<span className="main-back">Stack</span> Developer <span className="main-back">.</span>
        </h2>

        {/* Introduction */}
        <p className="home-description">
          I create modern, responsive and user-focused digital
          experiences with React, JavaScript and modern web technologies.
        </p>

        {/* Call-to-action buttons */}
        <div className="home-buttons">

          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Talk
          </a>

        </div>

        {/* Technologies */}
        <div className="home-tech">

          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>Git</span>
          <span>GitHub</span>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span></span>
        Scroll to explore
      </a>

    </section>
  )
}

export default Home