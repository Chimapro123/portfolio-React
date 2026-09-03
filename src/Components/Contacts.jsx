// Import the icons we need from react-icons
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

function ContactMe() {
  return (
    <section id="contact" className="contact">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      {/* Contact introduction */}
      <p className="contact-text">
        I'm always open to discussing new opportunities, projects,
        collaborations, and ideas. Feel free to reach out.
      </p>

      {/* Contact links */}
      <div className="contact-links">

        {/* Facebook */}
        <a
          href="https://web.facebook.com/people/Chiboy-Yagi/pfbid02UArY8sai1ndCzZqAnXcuHo155nqizC6MamKCzKimZwhgJNC713qnB398WjMMNRSel/?mibextid=wwXIfr&rdid=KJp851EqdOlxipuL&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1DU6HCD9By%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link facebook-link"
          aria-label="Facebook"
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>
     

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/chima-eze-443a2b2aa/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link linkedin-link"
  >
    <FaLinkedin/>
    LinkedIn
  </a>



        {/* GitHub */}
        <a
          href="https://github.com/Chimapro123"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link
          github-link"
          aria-label="GitHub"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/chiboyyagi1/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link
          instagram-link"
          aria-label="Instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        {/* Email */}
        <a
          href="mailto:chiboyeze73@gmail.com"
          className="contact-link
          email-link"
          aria-label="Email"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+2348127035742"
          className="contact-link
          phone-link"
          aria-label="Phone"
        >
          <FaPhone />
          <span>Call Me</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348127035742"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp-link"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
          <a
          href="https://x.com/cyagy37?s=11"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link X-link"
          aria-label="Twitter"
        >
            <FaTwitter/>
          
          <span>Twitter</span>
        </a>  

         <a
          href="https://www.youtube.com/@Chiboyyagi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link tube-link"
          aria-label="Youtube"
        >
            <FaYoutube/>
          
          <span>Youtube</span>
        </a>  
       


        </div>

    </section>
  )
}

export default ContactMe