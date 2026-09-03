function Skills() {
  return (
    <section id="skills" className="skills">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">What I Work With</p>
        <h2>My Skills</h2>
      </div>

      {/* Skills grid */}
      <div className="skills-grid">

        {/* HTML */}
        <div className="skill-card">
          <h3>HTML</h3>
          <p>Building clean and semantic website structures.</p>
        </div>

        {/* CSS */}
        <div className="skill-card">
          <h3>CSS</h3>
          <p>Creating responsive layouts and modern interfaces.</p>
        </div>

        {/* JavaScript */}
        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Adding functionality and interactive experiences.</p>
        </div>

        {/* React */}
        <div className="skill-card">
          <h3>React</h3>
          <p>Building reusable and component-based interfaces.</p>
        </div>

        {/* Git & GitHub */}
        <div className="skill-card">
          <h3>Git & GitHub</h3>
          <p>Managing code, repositories and project versions.</p>
        </div>

        {/* Vite */}
        <div className="skill-card">
          <h3>Vite</h3>
          <p>Developing fast modern frontend applications.</p>
        </div>

      </div>

    </section>
  )
}

export default Skills