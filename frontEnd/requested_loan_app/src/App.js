import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'

const App = () => (
  <BrowserRouter>
    <Redirect
      from="/"
      to="/loan_app" />
    <Switch>
      <Route exact path="/loan_app" component={Navigation} />
    </Switch>
  </BrowserRouter>
)

export default App;
