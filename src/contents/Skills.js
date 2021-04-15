import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
    super(props);
    this.state={
      'myskills':[
        'Google Analytics',
        'Facebook Ads',
        'Google Ads',
        'HTMl',
        'JavaScript',
        'Liquid',
        'CSS',
        'SASS',
        'React.js',
        'Shopify Plus',
        '3PL Integrations',
        'Food & Beverage Logistics',
        'D2C E-Commerce Advertising',
        'Management',
      ]
    };
  }
  render() {
    return(
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map((value)=> {
            return<li>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;
