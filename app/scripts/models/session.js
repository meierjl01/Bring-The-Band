import Backbone from 'backbone';
import {
    hashHistory
} from 'react-router';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
    initialize() {
        if (window.localStorage.getItem('user-token')) {
            this.set('user-token', window.localStorage.getItem('user-token'));
        }
    },
    idAttribute: 'objectId',
    defaults: {
        username: '',
        email: '',
        'user-token': ''
    },

    validatePassword(password, confirmPw) {
        if (password === confirmPw) return true;
    },

    register(email, password) {
        this.save({
            email,
            password
        }, {
            headers: {
                'application-id': config.appId,
                'secret-key': config.secret,
                'Content-Type': 'application/json',
                'application-type': 'REST'
            },
            url: 'https://api.backendless.com/v1/users/register',
            success: () => {
                this.login(email, password);
            }
        });
    },

    login(email, password) {

      $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/users/login',
        contentType: 'application/json',
        data: JSON.stringify({
          login: email,
          password
        }),
        success: (response) => {
          this.set(response);
                  window.localStorage.setItem('user-token', response['user-token']);
                  window.localStorage.setItem('email', response['email']);
                  window.localStorage.setItem('ownerId',response.ownerId);
                  hashHistory.push('/');
        }
      })
        // this.save({
        //     login: email,
        //     password
        // }, {
        //     headers: {
        //         'application-id': config.appId,
        //         'secret-key': config.secret,
        //         'Content-Type': 'application/json',
        //         'application-type': 'REST',
        //     },
        //     wait: true,
        //     url: 'https://api.backendless.com/v1/users/login',
        //     success: (response) => {
        //         window.localStorage.setItem('user-token', response['user-token']);
        //         window.localStorage.setItem('email', response['email']);
        //         window.localStorage.setItem('ownerId',response.ownerId);
        //         hashHistory.push('/');
        //     }
        // });
    },
    logout() {
        $.ajax({
            headers: {
                'application-id': config.appId,
                'secret-key': config.secret,
                'application-type': 'REST'
            },
            url: 'https://api.backendless.com/v1/users/logout',
            success: () => {
                this.clear();
                window.localStorage.clear();
                hashHistory.push('/');
            }
        });
    }
});
