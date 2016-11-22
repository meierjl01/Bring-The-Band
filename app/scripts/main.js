import ReactDom from 'react-dom';
import store from './store';
import $ from 'jquery';
import config from './config';
import router from './router';

const container = document.getElementById('container');

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('spotify') === -1) {

    // console.log('ajaxSend');

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
  }
});

ReactDom.render(router, container);
