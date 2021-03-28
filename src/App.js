import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'

import './styles/style.scss'
import 'bulma'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)



export default App