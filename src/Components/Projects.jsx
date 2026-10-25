import React from 'react'

function Projects() {
  return (
    <section id="projects" className="projects">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">My Recent Work</p>
        <h2>Projects On <span className='main-back'>Webdesign</span>💻</h2>
      </div>

      {/* Projects grid */}
      <div className="projects-grid">

       
{/* Project 1 */}
<article className="project-card">

  {/* Screenshot with project number on top */}
  <div className="project-image-wrapper">
     <a
    href={`${import.meta.env.BASE_URL}comfy%20client.png`}
    target="_blank"
    rel="noopener noreferrer"
    className="project-image-link"
    aria-label="Open full ComfyClient screenshot"
  >
    <img
      src={`${import.meta.env.BASE_URL}comfy%20client.png`}
      alt="ComfyClient website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

    <p className="project-number image-number">01</p>
  </div>

  {/* Project information stays below the image */}
  <div className="project-content">
    <h3>ComfyClient</h3>

    <p>
      A modern e-commerce website designed for selling couches
      online with a clean and user-friendly shopping experience.
    </p>

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Responsive Web Design</span>
    </div>

    <div className="project-links">
      <a
        href="https://chimapro123.github.io/ComfyClient-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo ↗
      </a>

      <a
        href="https://github.com/Chimapro123/ComfyClient-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </div>

</article>

        {/* Project 2 */}
        <article className="project-card">
         
          <div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}chi%20shop.png`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full Chi Shop screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}chi%20shop.png`}
      alt="Chi Shop website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">02</p>
</div>
              <div className="project-content">

            <h3>Chi-Shop</h3>

            <p>
              A bakery e-commerce website created to showcase products
              and provide customers with a smooth and simple shopping
              experience.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Web Design</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/gpt.html" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/portfolio/blob/main/gpt.html" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>

        {/* Project 3 */}
        <article className="project-card">
        
           <div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}careydave.png`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full CareyDave screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}careydave.png`}
      alt="CareyDave website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">03</p>
</div>
  <div className="project-content">
            <h3>CareryDave</h3>

            <p>
              An AI-powered personal health assistant concept designed
              to help users track important daily health information.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Responsive web design</span>
              <span>React.js</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/CareryDave/" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/CareryDave" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
        {/* Project 4 */}
        <article className="project-card">

          <div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}former%20potfrolio.png`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full Former Portfolio screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}former%20potfrolio.png`}
      alt="Former portfolio website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">04</p>
</div>
          <div className="project-content">

            <h3>My Former Portfolio</h3>

            <p>
              A responsive portfolio website designed to showcase my programming skills for a school project earlier 2026 and uploaded on github 
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Responsive web design</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
          {/* Project 5 */}
        <article className="project-card">
<div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}hcare.png`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full HCare screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}hcare.png`}
      alt="HCare website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">05</p>
</div>

          <div className="project-content">
            <h3>HCare.</h3>

            <p>
              A website project focused on presenting animal vaccine information in a simple and accessible way for users. 
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Responsive web design</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/helen.html" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/portfolio/blob/main/helen.html" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
        {/* Project 6 */}
        <article className="project-card">
          
          <div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}gaddabless%20group.png`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full Gatdabless Group screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}gaddabless%20group.png`}
      alt="Gatdabless Group website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">06</p>
</div>

          <div className="project-content">


            <h3>GATDABLESS GROUP — Corporate Website</h3>

            <p>
           A modern, responsive corporate website I built for GATDABLESS GROUP, showcasing its Real Estate, Travel & Tours, and Media services through a clean, professional, and easy-to-navigate design.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Web Design</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/GATDABLESS-GROUP/" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/GATDABLESS-GROUP" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
                 {/* Project 7 */}
        <article className="project-card">

          
<div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}baillord.png`}
    target="_blank"
    rel="noopener noreferrer"
    className="project-image-link"
    aria-label="Open full Bailord project screenshot"
  >
    <img
      src={`${import.meta.env.BASE_URL}baillord.png`}
      alt="Bailord website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">07</p>
</div>

          <div className="project-content">
            <h3>Bailord App</h3>

            <p>
Bailord is a modern technology and lifestyle company providing quality smartphones, tablets, laptops, audio devices, power solutions, and smart accessories. 
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>html5</span>
              <span>css</span>
               <span>GitHub</span>
              <span>node.js</span>
              <span>Rest APIs</span>
             
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/Bailord-app/" download target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/Bailord-app" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>

                 {/* Project 7 */}
        <article className="project-card">

          
<div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}Suavy Beauty.png`}
    target="_blank"
    rel="noopener noreferrer"
    className="project-image-link"
    aria-label="Open full Bailord project screenshot"
  >
    <img
      src={`${import.meta.env.BASE_URL}Suavy Beauty.png`}
      alt="Bailord website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">08</p>
</div>

          <div className="project-content">
            <h3>Suavy Beauty</h3>

            <p>
Suavy Beauty is a modern e-commerce  cusmetic website, i built it with mordern web development tools and got a supabase as backend to accept subscribers email.
            </p>

            <div className="project-tech">
              <span>javascripts</span>
              <span>html5</span>
              <span>css</span>
               <span>GitHub</span>
              <span>Supabase</span>
             
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/SUAVY-BEAUTY-BEAUTY-ABOVE-ALL/"
              target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/SUAVY-BEAUTY-BEAUTY-ABOVE-ALL/" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
          {/* Project 9 */}
        <article className="project-card">

          <div className="project-image-wrapper">
  <a
    href={`${import.meta.env.BASE_URL}more%21%21.jpg`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open full project screenshot"
    className="project-image-link"
  >
    <img
      src={`${import.meta.env.BASE_URL}more%21%21.jpg`}
      alt="Project website screenshot"
      className="card-image"
      loading="lazy"
    />
  </a>

  <p className="project-number image-number">09</p>
</div>
          <div className="project-content">
            <h3> coming soon!</h3>

            <p>
         I am building advanced, efficient, and scalable digital solutions that solve real-world problems. I look forward to bringing my technical skills and innovative mindset to a forward-thinking team.
            </p>

            <div className="project-tech">
              <h5>Targeted Technologies:</h5>
              <hr />
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Tailwind CSS v4</span>
              <span>React Router</span>
              <span>Responsiveness</span>
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/helen.html" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123/portfolio/blob/main/helen.html" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>


 
       </div>
    <div className="section-heading">
        <p  className="section-label"> <br /> <br />  My Recent Work</p>
        <h2>Projects On <span className='main-back'>UI/UX</span>🎨</h2>
      </div>

      {/* Projects grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">01</p>

            <h3>UI/UX for X/twitter</h3>

            <p>
             I created this UI/UX design for a school project built, 
            </p>

            <div className="project-tech">
              <span>Figma</span>
             
            </div>

            <div className="project-links">
              <a href="https://www.figma.com/proto/ikS5PhFWx4DmKpkzh1GwlZ/Untitled?node-id=76-222&t=STJU8tnAK5gvD9rb-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A5&starting-point-node-id=76%3A222" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">02</p>

            <h3>UI/UX for Opay banking </h3>

            <p>
             Designed a modern OPay-inspired UI/UX concept focused on creating a simple, clear, and user-friendly digital payment experience. 
            </p>

            <div className="project-tech">
              <span>Figma</span>
           
            </div>

            <div className="project-links">
              <a href="https://github.com/Chimapro123" target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>

              <a href="https://github.com/Chimapro123" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

          </div>
        </article>
        
      </div>
      <div className="section-heading">
        <p className="section-label"><br /> <br /> My Recent Work</p>
        <h2>Projects On <span className='main-back'>C-Language</span> ©</h2>
      </div>
      {/* Projects grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <article className="project-card">
          <div className="project-content">

            <p className="project-number">01</p>

            <h3>Sch Management Sys</h3>

            <p>
              A console-based School Management System developed in C programming to manage student records efficiently. The system allows users to add, view, search, update, and delete student information while using structures, functions, arrays, pointers, and file handling for data storage and management.
            </p>

            <div className="project-tech">
               <span>C</span>
              <span>Struct</span>
              <span>File-Handling</span>
               <span>functions</span>
              <span>Arrays</span>
              <span>Pointers</span>
             
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/SCHOOLms.exe" download target="_blank" rel="noopener noreferrer">
                 Download SMS ↗
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

            <h3>Comp Management Sys</h3>

            <p>
              A console-based Company Management System developed in C to manage employees records and company information efficiently. The system uses structures, functions, file-handling, and CRUD operatins to create, view, search, update, the delete employee records while maintaining persistent data storage.
            </p>

            <div className="project-tech">
               <span>C</span>
              <span>Struct</span>
              <span>File-Handling</span>
               <span>functions</span>
              <span>Arrays</span>
              <span>Pointers</span>
             
            </div>

            <div className="project-links">
              <a href="" target="_blank" rel="noopener noreferrer">
                Download CMS ↗
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

            <h3>Bank Management Sys</h3>

            <p>
              A console-based Bank Management System developed in C to simulate essential banking operations. the system allows users to create and manage accounts, deposit and withdraw funds, check account balances, and search for customer records.
            </p>

            <div className="project-tech">
              <span>C</span>
              <span>Struct</span>
              <span>File-Handling</span>
               <span>functions</span>
              <span>Arrays</span>
              <span>Pointers</span>
             
            </div>

            <div className="project-links">
              <a href="https://chimapro123.github.io/portfolio/BMS.exe" download target="_blank" rel="noopener noreferrer">
                Download BMS ↗
              </a>

              <a href="https://github.com/Chimapro123" target="_blank" rel="noopener noreferrer">
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