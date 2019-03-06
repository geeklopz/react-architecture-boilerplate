// React Router
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Components
import Banner from '../components/Banner';

// Create Routes
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Banner} />
    </Switch>
  </BrowserRouter>
);

export default Router;
