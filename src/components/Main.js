import React from 'react'
import MainBody from './MainBody'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => {
  return <>
    <section className="hero is-large">
      <div className="hero-head">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <span className="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Main
            </a>
                <a className="navbar-item">
                  About
            </a>
            <a className="navbar-item">
                  Projects
            </a>
                <a className="navbar-item">
                  Contact Me
            </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MainBody />
    </section>
    <AboutMe />
    <Projects />
    <Contact />
  </>
}

export default Main