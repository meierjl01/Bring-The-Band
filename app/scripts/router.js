import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import config from './config';

import $ from 'jquery';

import session from './store';

import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import Search from './components/search';
import Votes from './components/votes';

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('spotify') === -1) {

    console.log('ajaxSend');

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secretKey);
    xhr.setRequestHeader('application-type', 'REST');
  }
});

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
