import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Atmosphere from './containers/Atmosphere';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Atmosphere />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

