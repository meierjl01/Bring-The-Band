import Backbone from 'backbone';
import {
    hashHistory
} from 'react-router';
import config from '../config';

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
      this.save({email, username, password},
        {headers: {
          'application-id': config.appId,
          'secret-key': config.secret,
          'Content-Type':'application/json',
          'application-type': 'REST'
        },
          url: 'https://api.backendless.com/v1/users/register',
        success: () => {
          this.login(email, password);
        }
      });
    },

    login(login, password) {
      this.save({login, password},
        {headers: {
          'application-id': config.appId,
          'secret-key': config.secret,
          'Content-Type':'application/json',
          'application-type': 'REST'
        },
          url: 'https://api.backendless.com/v1/users/login',
        success: () => {
          this.set({login, password});
          hashHistory.push('/');
        }
      });
    },
    logout() {
        $.ajax({
            url: 'https://api.backendless.com/v1/users/logout',
            success: () => {
                this.clear();
                window.localStorage.clear();
                hashHistory.push('/');
            }
        });
    }
});
