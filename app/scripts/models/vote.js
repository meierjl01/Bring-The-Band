import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({
    idAttribute: 'objectId',
    defaults: {
      name: '',
      image: '',
      votes: 0
    },
});
