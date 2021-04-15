import React, { Component } from 'react';
import WebCard from '../components/WebCard';
import sizzleLogo from '../img/Sizzlefish_logo.png';

class Websites extends Component {
  render() {
    return (
      <div className="condiv">
        <WebCard
          websitetitle="Sizzlefish.com"
          linkto="https://www.sizzlefish.com"
          platform="Shopify Plus"
          logoimg={sizzleLogo}
        />
      </div>
    );
  }
}
export default Websites;
