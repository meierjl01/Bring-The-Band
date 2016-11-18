import Backbone from 'backbone';
import {
    hashHistory
} from 'react-router';

export default Backbone.Model.extend({
  initialize() {
    if(window.localStorage.getItem('user-token')) {
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
      if(password === confirmPw) return true;
    },

//     register(email, username, password) {
//         this.save({
//                 username,
//                 email,
//                 password
//             }, {
//                 url: 'https://api.backendless.com/v1/users/register'
//             },
//             success: () => {
//                 this.login(email, password);
//             }
//         });
// },
login(email, password) {
    this.save({
        email,
        password
    }, {
        url: 'https://api.backendles.com/v1/users/login',
        success: (response) => {
            this.set(response);
            window.localStorage.setItem('user-token', response['user-token']);
            window.localStorage.setItem('username', response['username']);
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
