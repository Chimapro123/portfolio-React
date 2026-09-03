function About() {
  return (
    <section id="about" className="about">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      {/* About content */}
      <div className="about-content">

        {/* Main about text */}
        <div className="about-text">
          <p>
         My name is Chima David Eze. I am a self-taught developer who has been coding for the past two years. I started by teaching myself programming and building projects independently. In 2026, I officially enrolled at Aptech, a global vocational training and IT education centre, where I recently graduated.
          </p>

          <p>
            I started coding with a strong curiosity about technology,
            and over time that curiosity became a serious commitment
            to building websites and applications.
          </p>

          <p>
           I have strong knowledge of C programming and have built fully functioning systems with it. I am a quick thinker, hardworking, adaptable, and confident in learning new technologies. I have developed the ability to make the most of the technology and tools available to me and turn ideas into working solutions.
          </p>

          <p>
            I have a good level of English, communicate well, and I am easy to work with. I understand that technology is always changing, so I am willing to learn, improve, and adapt to whatever the role requires.
          </p>
          <p>
            I am specifically applying for opportunities in Adelaide because I already have accommodation there, making my relocation simple. Hiring me would not require a complicated move — I am ready for the opportunity and ready to prove myself.
          </p>
          <p>
            As a developer, I also believe less is more. I build clean, professional websites that focus on what users actually need instead of filling the screen with unnecessary information.
          </p>
        </div>

        {/* Quick information */}
        <div className="about-info">

          <div className="info-box">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML & CSS</p>
          </div>

          <div className="info-box">
            <h3>Tools</h3>
            <p>Git, GitHub, Vite & VS Code</p>
          </div>

          <div className="info-box">
            <h3>Goal</h3>
            <p>Build great products and grow with a strong team</p>
          </div>
           <div className="info-box">
            <h3>Backend</h3>
            <p> <ul>
               <li> Node.js → runs JavaScript on the server</li>
<li>Express.js → helps build backend APIs and servers</li>
<li>MongoDB → stores data</li>
<li>MySQL/PostgreSQL → databases</li>
<li>REST API → lets the frontend communicate with the backend</li>
<li>JWT / Authentication → handles user login and security</li>
<li>Git/GitHub → manages and stores your code</li>
</ul>
</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About