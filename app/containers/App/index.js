/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable'
import LoginPage from 'containers/LoginPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="full-height">
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
