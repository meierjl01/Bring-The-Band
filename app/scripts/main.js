import ReactDom from 'react-dom';
import React from 'react';
import store from './store';
import router from './router';


const container = document.getElementById('container');

ReactDom.render(router, container);
