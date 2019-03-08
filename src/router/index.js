// React Router
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Components
import Banner from '../components/Banner';
import Redux from '../App';

// Create Routes
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Banner} />
      <Route path="/redux" component={Redux} />
    </Switch>
  </BrowserRouter>
);

export default Router;
