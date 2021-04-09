import React from 'react'
import projectone from '../images/projectone.png'
import projecttwo from '../images/projecttwo.png'
import projectthree from '../images/projectthree.png'
import projectfour from '../images/projectfour.png'

const Projects = () => {

  return <section className="hero is-large" id="projects">
    <div className="hero-body">
      <div className="text-content">
        <h1 className="proj" >Projects.</h1><br />
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={projectfour} className="p4" />
            </div>
            <div className="flip-card-back">
              <h1 className="title">Project 4.</h1>
              <p className="subtitle">timeframe: one week</p>
              <p className="subtitle">type: group</p>
              <p>‘Picster’: this was my final group project built in just under a week using Flask and Python to build the back end and React JS to build the front end. It is a photo sharing platform (a mockup of Instagram/Pinterest) that allows the user to make an account, like, comment as well as share and edit their own photos. Again, I thought it would be best to have a hand in both the backend building and the front-end styling, especially as Python was very new to me at this stage in the course. I also was able to build and implement a pytest suite to test the photo API endpoints, which I found to be a great learning experience.</p><br /><br />
              <a href="https://picster-project-4.herokuapp.com/"><i className="devicon-github-original-wordmark" id="p4"></i></a>
            </div>
          </div>

        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={projectthree} className="p3" />
            </div>
            <div className="flip-card-back">
              <h1 className="title">Project 3.</h1>
              <p className="subtitle">timeframe: one week</p>
              <p className="subtitle">type: group</p>
              <p>‘Hack-a-snack’: this was a group project built over the space of a week using MERN stack, and integrating a third party API allowing the user to create an account, search for recipes, save, comment, rate, and upload their own recipes to the site. I had a hand in building both the backend - setting up the controllers, views and models, and also connecting the front end. I spent a lot of time on the single-recipe page, both in appearance and in functionality.</p><br /><br />
              <a href="https://hack-a-snack.herokuapp.com/"><i className="devicon-github-original-wordmark" id="p3"></i></a>
            </div>
          </div>

        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={projecttwo} className="p2" />
            </div>
            <div className="flip-card-back">
              <h1 className="title">Project 2.</h1>
              <p className="subtitle">timeframe: 48 hours</p>
              <p className="subtitle">type: group</p>
              <p>‘Film Finder’: this was a paired programming ‘hackathon’ style project built over 48 hours. We integrated the MovieDB - a third party API - into this website to allow the user to search a database of films, and built the front end using React. It was a very interesting learning experience as we conducted the entire project over screen-share, which really allowed me to hone my error-spotting skills and refine my attention to detail.</p><br /><br />
              <a href="https://nalderson.github.io/project-2/"><i className="devicon-github-original-wordmark" id="p2"></i></a>
            </div>
          </div>

        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={projectone} className="p1" />
            </div>
            <div className="flip-card-back">
              <h1 className="title">Project 1.</h1>
              <p className="subtitle">timeframe: one week</p>
              <p className="subtitle">type: solo</p>
              <p>I built a Scooby-Doo themed version of the arcade grid-game ‘Frogger’ using HTML, CSS and vanilla JavaScript. I built this by myself within one week.</p><br /><br />
              <a href="https://emilyrandall1998.github.io/project-one/"><i className="devicon-github-original-wordmark" id="p1"></i></a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

}

export default Projects