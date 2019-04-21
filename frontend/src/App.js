import React, { Component } from 'react';

import { Navbar } from './components/misc';

import './App.css';

class App extends Component {
  // Example from https://rjvim.github.io/tailwind-templates/fixed-header-footer.html
  render() {
    return (
      <div className="min-h-screen">
        <div className="flex flex-col w-full fixed pin-l pin-y">
          <Navbar />
          <div className="px-4 pt-4 flex-1 overflow-y-scroll">
            <div className="container mx-auto" style={{ height: '1000px' }}>
              <h1>What's so great about Tailwind</h1>
              <p>Keep filling the content, you will see a scrollbar.</p>
              <p>Added height of 1000px for demo</p>
            </div>
          </div>
          <div className="border-t border-smoke px-8 py-4">
            <div className="flex justify-center text-grey">
              Rajiv Seelam</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
