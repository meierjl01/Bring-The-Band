import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Vote from '../../app/scripts/models/vote'

describe('vote model', () => {
  let vote;

  beforeEach(() => {
    vote = new Vote();
  });

  it('should create a Backbone Model', () => {
      expect(vote).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Vote).to.be.a('function');
  });

  it('should have an attribute id of objectId', () => {
      expect(vote).to.have.property('idAttribute');
      expect(vote.idAttribute).to.equal(objectId);
  });

  it('should have a default name value of an empty string', () => {
          expect(vote.get('name')).to.equal('');
      });

  it('should have a default image value of an empty string', () => {
          expect(vote.get('image')).to.equal('');
      });

  it('should have a default user-token value of 0', () => {
          expect(vote.get('votes')).to.equal(0);
      });

});
