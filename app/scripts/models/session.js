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

    register(email, username, password) {
        this.save({
            email,
            username,
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

    login(login, password) {
        this.save({
            login,
            password
        }, {
            headers: {
                'application-id': config.appId,
                'secret-key': config.secret,
                'Content-Type': 'application/json',
                'application-type': 'REST',
            },
            url: 'https://api.backendless.com/v1/users/login',
            success: (response) => {
                this.set({
                    login,
                    password
                });
                window.localStorage.setItem('user-token', response['user-token']);
                window.localStorage.setItem('email', response['email']);
                hashHistory.push('/');
            }
        });
    },
    logout() {
        $.ajax({
            headers: {
                'application-id': config.appId,
                'secret-key': config.secretKey,
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
