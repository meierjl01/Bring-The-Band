import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import config from './config';

import $ from 'jquery';

import session from './store';

import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';

// $(document).ajaxSend((e, xhr, opts) => {
//   console.log('ajaxSend');
//   xhr.setRequestHeader('application-type', 'REST');
//   xhr.setRequestHeader('application-id', config.appId);
//   xhr.setRequestHeader('secret-key', config.secret);
// });


const router = (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Nav}>
          <Route path = "login" component = {Login} />
          <Route path = "register" component = {Register} />
        </Route>
    </Router>
);

export default router;

// <Route path = "search" component = {} />
// <Route path = "votes" component = {} />
