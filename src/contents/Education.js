import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard title="B.S Engineering, EE" where="East Carolina University" from="May 2016" to="May 2019" />
        <Widecard title="High School" where="Washington High School" from="August 2009" to="May 2013"/>
      </div>

    );
  }

}
export default Education;
