import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Atmosphere.css';
import Home from '../containers/Home/Home';

class Atmosphere extends Component {
    render() {
      return (
          <div className="Atmosphere">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route render={() => <center><h1 id="error">404 Not Found</h1></center>} />
                </Switch>
          </div>
      );
    }
  }
  
  export default Atmosphere;
  