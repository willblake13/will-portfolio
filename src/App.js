import React from 'react';
//import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

  function App() {
    return (
      <BrowserRouter basename ={process.env.PUBLIC_URL}>
        <Switch>
          <div className="App">
          <Navbar/>
          <Route path='/will-portfolio/'>
            <Redirect to='/home'/>
          </Route>
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
          <Route>
            <h1>Page Not Found</h1>
          </Route>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
  export default App;
