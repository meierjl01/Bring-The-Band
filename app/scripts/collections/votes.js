import Backbone from 'backbone';
import Vote from '../models/vote';
import {
    hashHistory
} from 'react-router';

export default Backbone.Collection.extend({
            model: Vote,
            url: 'https://api.backendless.com/v1/data/artists',
            parse(data) {
                return data.data
            },
            //this function is now going to have two parts: if the band has already been voted for and is in back end, just add one to votes. If not, add to backendless and also add 1 vote.
            //use save

            addVote({
                name,
                image,
                votes,
                id
            }) {
                this.fetch({
                        success: () => {
                            let artist = this.findWhere({
                                name: name
                            });
                            if (artist) {
                                artist.save({
                                    votes: artist.get('votes') + 1
                                }, {
                                    success: () => {
                                        hashHistory.push('votes');
                                    }
                                });

                            } else {
                                this.create({
                                        name,
                                        image,
                                        id,
                                        votes: 1,
                                    }, {
                                        success: () => {
                                            hashHistory.push('votes');
                                        }
                                    });
                                }
                            }
                        });
                }
            });
        //  function for just saving band to backendless (explorer mode) without keeping track of votes
        //   addVote({
        //       name,
        //       image,
        //       votes,
        //       id
        //   }) {
        //     $.ajax({
        //       type: 'POST',
        //       url: 'https://api.backendless.com/v1/data/artists',
        //       contentType: 'application/json',
        //       data: JSON.stringify({name, image, votes, id}),
        //       success: () => {
        //         hashHistory.push('votes');
        //       }
        //   });
        // }
