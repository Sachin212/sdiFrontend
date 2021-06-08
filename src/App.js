import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './styles/styles.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blogs from './pages/Blogs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blogs' component={Blogs} />
            <Route component={NotFound} />
          </Switch>
      </Router>
      {/* <div class="left_svg">
      <svg viewBox="0 0 1440 320">
        <path fill="#000" fill-opacity="1" d="M0,96L60,133.3C120,171,240,245,360,266.7C480,288,600,256,720,202.7C840,149,960,75,1080,90.7C1200,
        107,1320,213,1380,266.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,
        320,60,320L0,320Z">
        </path>
      </svg>
      </div> */}
    </>
  );
}

export default App;
