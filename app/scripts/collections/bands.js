import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';

export default Backbone.Collection.extend({
    model: Band,
});
