import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

describe('session model', () => {
    let session;

    beforeEach(() => {
        session = new Session();
    });

    it('should create a Backbone Model', () => {
        expect(session).to.be.an.instanceof(Backbone.Model);
    });

    it('should be a function (because it\'s a constructor)', () => {
        expect(Session).to.be.a('function');
    });

    it('should have an attribute id of objectId', () => {
        expect(session).to.have.property('idAttribute');
        expect(session.idAttribute).to.equal(objectId);
    });

//not sure if I'm going to actually use the username in my app, but I'm going to have the test for it, just in case
    it('should have a default username value of an empty string ', () => {
            expect(session.get('username')).to.equal('');
        });

    it('should have a default email value of an empty string', () => {
            expect(session.get('email')).to.equal('');
        });

    it('should have a default user-token value of an empty string', () => {
            expect(session.get('user-token')).to.equal('');
        });

    it('should have a default votedArtists value of [] ', () => {
          expect(session.get('votedArtists')).to.equal([]);
          expect(session.get('votedArtists')).to.be.an('array');
        });

    it('should have a validatePassword method', () => {
      expect(session).to.have.property('validatePassword');
      expect(session.validatePassword).to.be.a.('function');
    });

    it('should have a register method', () => {
      expect(session).to.have.property('register');
      expect(session.register).to.be.a.('function');
    });

    it('should have a login method', () => {
      expect(session).to.have.property('login');
      expect(session.login).to.be.a.('function');
    });

    it('should have a logout method', () => {
      expect(session).to.have.property('logout');
      expect(session.logout).to.be.a.('function');
    });
});

//things to test for:
//change events?
//
// validatePassword takes password and confirmPw
//
// register takes email, username and password
//
// login takes email and password
