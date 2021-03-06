import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import session from './store';

import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import Search from './components/search';
import Votes from './components/votes';

const router = (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Nav}>
          <Route path = "login" component = {Login} />
          <Route path = "register" component = {Register} />
          <Route path = "search" component = {Search} />
          <Route path = "votes" component = {Votes} />
        </Route>
    </Router>
);

export default router;
