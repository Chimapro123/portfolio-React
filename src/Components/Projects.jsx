import React from 'react'

function Projects() {
  return (
    <section id="projects" className="projects">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">My Recent Work</p>
        <h2>Projects</h2>
      </div>

      {/* Projects grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">01</p>

            <h3>ComfyClient</h3>

            <p>
              A modern e-commerce website designed for selling couches
              online with a clean and user-friendly shopping experience.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a href="/ComfyClient/index.html" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">02</p>

            <h3>Chi-Shop</h3>

            <p>
              A bakery e-commerce website created to showcase products
              and provide customers with a smooth and simple shopping
              experience.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>

        {/* Project 3 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">03</p>

            <h3>CareryDave</h3>

            <p>
              An AI-powered personal health assistant concept designed
              to help users track important daily health information.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
 {/* Project 4 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">04</p>

            <h3>JHDFNVVIKHVJK</h3>

            <p>
              An AI-powered personal health assistant concept designed
              to help users track important daily health information.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
      </div>

    </section>
  )
}

export default Projects