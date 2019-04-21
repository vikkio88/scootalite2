import React, { Component } from 'react';

import { Navbar, Body, Footer } from './components/misc';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="min-h-screen">
        <div className="flex flex-col w-full fixed pin-l pin-y">
          <Navbar />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
