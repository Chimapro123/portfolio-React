import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section id="home" className="home">

      {/* Decorative background elements */}
      <div className="home-glow glow-one"></div>
      <div className="home-glow glow-two"></div>

      {/* Main hero container */}
      <div className="home-container">

        {/* LEFT SIDE */}
        <div className="home-content">

          {/* Small status badge */}
          <div className="home-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className="home-greeting">
            Hello, I'm
          </p>

          {/* Name */}
          <h1>
            Chima <span>Eze</span>
          </h1>

          {/* Main profession */}
          <h2>
            Full-<span className="main-back">Stack</span> Developer
            <span className="main-back">.</span>
          </h2>

          {/* Typewriter skills */}
          <div className="home-typewriter">
            <span>I specialize in </span>

            <span className="typewriter-text">
              <Typewriter
                words={[
                  "UI/UX Design",
                  "Web Development",
                  "React Development",
                  "JavaScript",
                  "Responsive Design",
                  "Python Programming",
                  "Generative AI",
                  "Problem Solving",
                  "Team Collaboration",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </div>

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
            <span>more....</span>
          </div>

        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="home-image-container">

          <div className="profile-image-glow"></div>

          <div className="profile-image-wrapper">
            <img
              src="images/chima-profile.png"
              alt="Chima David Eze"
              className="profile-image"
            />
            
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span></span>
        Scroll to explore
      </a>

    </section>
  );
}

export default Home;