import React from 'react'
import portfoliopic from '../images/portfoliopic.png' 

const AboutMe = () => {

  return <section className="hero is-large" id="aboutme">
    <div className="hero-body">
      <div className="aboutme">
        <h1>About me.</h1><br />
        <img src={portfoliopic} />
        <p>I am a junior web developer with a background in English Literature. My interest in coding was sparked by a conversation with a family member who was a coding instructor but, like me, came from a non-STEM background. This made me completely rethink all of my preconceptions about the industry, and sparked a passion to combine the creativity of English Literature with the logical structure and practical application of web development.</p><br />
        <p>I decided the best way to begin this career change was through an intensive course, so I undertook the Software Engineering Immersive course at General Assembly during lockdown to give me a strong foundation and solidify what has now become a passion for coding. I am looking to work in a dynamic and collaborative environment, where I can share my creative ideas but also continue to learn from and develop my skill set.</p>
      </div>
    </div>
  </section>

}

export default AboutMe

