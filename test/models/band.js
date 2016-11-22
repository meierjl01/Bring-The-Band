import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Band from '../../app/scripts/models/band';

describe('band model', () => {
  let band;

  beforeEach(() => {
    band = new Band();
  });

  it('should create a Backbone Model', () => {
      expect(band).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Band).to.be.a('function');
  });

  it('should have an idAttribute of id', () => {
      expect(band).to.have.property('idAttribute');
      expect(band.idAttribute).to.equal('id');
  });

});
