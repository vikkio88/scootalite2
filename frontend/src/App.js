import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';

import { Navbar, Body, Footer } from './components/misc';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="min-h-screen">
          <div className="flex flex-col w-full fixed pin-l pin-y">
            <Router>
              <Navbar />
              <Body />
              <Footer />
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
