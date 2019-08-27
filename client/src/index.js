import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './home/index';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
