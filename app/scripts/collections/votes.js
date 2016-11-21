import Backbone from 'backbone';
import $ from 'jquery';
import Vote from '../models/vote';
import config from '../config';

export default Backbone.Collection.extend({
  model: Vote,
  url: 'https://api.backendless.com/v1/data/artists',
  parse(data) {
    return data.data
  },
});
