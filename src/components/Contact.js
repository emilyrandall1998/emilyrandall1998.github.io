import React from 'react'

const Contact = () => {

  return <section className="hero is-large" id="aboutme">
    <div className="hero-body">
      <div className="text-content">
        <h1>Contact me.</h1> 
        <div className="contact-box">
          <div className="contact-item">
            <i className="far fa-envelope contact-icon"></i> <a className="contact-link"
            href="mailto:emilyrandall1998@gmail.com">emilyrandall1998@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin contact-icon"></i> <a className="contact-link" target='_blank' 
            href="www.linkedin.com/in/emilyjanerandall">www.linkedin.com/in/emilyjanerandall</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github-square contact-icon"></i> <a className="contact-link" target='_blank' 
            href="https://github.com/emilyrandall1998">https://github.com/emilyrandall1998</a>
          </div>
      </div>
      </div>
    </div>
  </section>

}

export default Contact

