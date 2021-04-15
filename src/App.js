import React from 'react';
//import './App.css';
import {HashRouter, BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

  function App() {
    return (
          <div className="App">
          <Navbar/>
          <HashRouter>
              <Switch>
              <Route exact path='/'>
                <Redirect to='/home'/>
              </Route>
              <Route exact path='/home'>
                <HomePage />
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
              <Route path='/education'>
                <Education />
              </Route>
              <Route path='/skills'>
                <Skills/>
              </Route>
              <Route path='/about'>
                <About />
              </Route>
            </Switch>
          </HashRouter>
          </div>

    );
  }
  export default App;
