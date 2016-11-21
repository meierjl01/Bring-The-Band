import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';
import config from '../config';
import {
    hashHistory
} from 'react-router';

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
    },
    //change to this.create
    addVote({
        name,
        image,
        votes
    }) {
      $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/data/artists',
        contentType: 'application/json',
        data: JSON.stringify({name, image, votes}),
        success: () => {
          hashHistory.push('votes');
        }      
    });
}
});
