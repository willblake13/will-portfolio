import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from '../App.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={'NavItemActive':''}
  }

  activeitem=(x)=>
  {
    if(this.state.NavItemActive.length>0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x},()=>{
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/home"  activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about"  activeClassName="active">About</NavLink></li>
          <li><NavLink to="/education"  activeClassName="active">Education</NavLink></li>
          <li><NavLink to="/skills"  activeClassName="active">Skills</NavLink></li>
          <li><NavLink  to="/contact"  activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/websites" activeClassName="active">Websites</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
