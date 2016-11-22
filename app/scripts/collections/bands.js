import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';
import config from '../config';

export default Backbone.Collection.extend({
    model: Band,

    //change to this.fetch
    getBands(artist) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: artist,
                type: 'artist'
            },
            success: (data) => {
                this.reset();
                this.add(data);
            },
        });
    }
});
