import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';

export default Backbone.Collection.extend({
    model: Band,

    //this.fetch
    getBands(artist) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: artist,
                type: 'artist'
            },
            success: (response) => {
                this.add(response);
            },
        });
    },
    addVote({
        name,
        photo,
        votes
    }) {
        this.create({
            name,
            photo,
            votes
        }, {
            headers: {
                'application-id': config.appId,
                'secret-key': config.secret,
                'Content-Type': 'application/json',
                'application-type': 'REST'
            },
            url: 'https://api.backendless.com/v1/data/bands'
        });
    }

});
