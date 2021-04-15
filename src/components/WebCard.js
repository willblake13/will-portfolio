import React, {Component } from 'react';
import './WebCard.modules.css';

class WebCard extends Component {
  render() {
    return (
      <div class="webcard">
        <div class="compdet">
              <img class='logo' src={this.props.logoimg} alt={this.props.websitetitle}/>
              <h2 class='firsttext'>{this.props.websitetitle}</h2>
              <h4 class='secondtext'>Platform: {this.props.platform}</h4>
              <a class='link' href={this.props.linkto}>Visit {this.props.websitetitle}</a>
          </div>
        </div>
    );
  }
}
export default WebCard;
