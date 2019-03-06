import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="dalocae-banner dalocae-bg">
        <h1 className="text-center">React Architecture Boilerplate</h1>
        <h3 className="text-center">
          React architecture for front-end projects
        </h3>
        <p className="text-center">
          <a href="https://danilocaetano.com">Danilocaetano.com</a>
        </p>
      </div>
    );
  }
}

export default Banner;
