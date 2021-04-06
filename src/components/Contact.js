import React from 'react'

const Contact = () => {

  return <section className="hero is-large" id="contact">
    <div className="hero-body">
      <div className="text-content">
        <h1>Contact me.</h1> 
        <div className="contact-box">
          <div className="contact-item">
            <a className="contact-link"
            href="mailto:emilyrandall1998@gmail.com">emilyrandall1998@gmail.com</a>
          </div>
          <div className="contact-item">
            <a className="contact-link" target='_blank' 
            href="www.linkedin.com/in/emilyjanerandall">www.linkedin.com/in/emilyjanerandall</a>
          </div>
          <div className="contact-item">
            <a className="contact-link" target='_blank' 
            href="https://github.com/emilyrandall1998">https://github.com/emilyrandall1998</a>
          </div>
      </div>
      </div>
    </div>
  </section>

}

export default Contact

