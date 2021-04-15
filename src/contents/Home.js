import React, { Component } from 'react';
import profilepic from '../img/willblake13.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class HomePage extends Component {
  render() {
    return(
      <div className="condiv home">
        <img src={profilepic} className="ProfilePic"></img>
        <ReactTypingEffect className="typingeffect" text={['My Name is William Blake', 'I Make Websites']}
          speed={100}
          eraseDelay={700}
        />
        <br></br>
        <Social/>
      </div>
    )
  }
}
export default HomePage;
