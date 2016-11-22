import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Votes from '../../app/scripts/collections/votes';

describe('votes collection', () => {
    let votes;

    beforeEach(() => {
        votes = new Votes();
    });

    it('should create a Backbone Collection', () => {
        expect(votes).to.be.an.instanceof(Backbone.Collection);
    });

    it('should have a addVote method', () => {
      expect(votes).to.have.property('addVote');
      expect(votes.addVote).to.be.a('function');
    });

    it('should throw an error if it doesn\'t get an object passed in', () => {
        let fn = votes.addVote.bind(votes, 1);
        expect(fn).to.throw();
      });

//error -- cannot read property apply of undefined.
//got to making actual ajax request and then broke
    // it('should fire the change event when addVote is called', () => {
    //   let spy = sinon.spy();
    //   votes.on('change', spy);
    //   votes.addVote({name: '', image: '', votes: 1, id: ''});
    //   expect(spy.callCount).to.equal(1);
    // });

    });
