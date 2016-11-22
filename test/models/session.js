import React from 'react';
import Backbone from 'backbone';

import {
    expect
} from 'chai';
import {
    shallow
} from 'enzyme';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

describe('session model', () => {
    let session;

    beforeEach(() => {
        Session.prototype.initialize = () => {

        };
        session = new Session();
    });

//error is popping up because of initialize function in session
//node doesn't have a window -- can test in the browser (in mocha docs)
//per Jess, have to change test wording for that
//or could create mock window for unit testing (can Google that)
//see other before each function above -- gets rid of window error

    it('should create a Backbone Model', () => {
        expect(session).to.be.an.instanceof(Backbone.Model);
    });

    it('should be a function (because it\'s a constructor)', () => {
        expect(Session).to.be.a('function');
    });

    it('should have an attribute id of objectId', () => {
        expect(session).to.have.property('idAttribute');
        expect(session.idAttribute).to.equal('objectId');
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
        expect(session.get('votedArtists')).to.deep.equal([]);
        expect(session.get('votedArtists')).to.be.an('array');
    });

    it('should have a validatePassword method', () => {
        expect(session).to.have.property('validatePassword');
        expect(session.validatePassword).to.be.a('function');
    });


    //register testing
    it('should have a register method', () => {
        expect(session).to.have.property('register');
        expect(session.register).to.be.a('function');
    });


//same ajax error as error in the votes model testing
    // it('should run the login function when I fire the register function', () => {
    //     let spy = sinon.spy(session, 'register');
    //     session.register({
    //         email: 'jen@jen.com',
    //         password: 'jen'
    //     });
    //     expect(spy.callCount).to.equal(1);
    // });

    it('should throw an error if it doesn\'t get an empty string for password and/or username', () => {
        let fn = session.register.bind(session, 1);
        expect(fn).to.throw();
    });


    //login testing
    it('should have a login method', () => {
        expect(session).to.have.property('login');
        expect(session.login).to.be.a('function');
    });

    it('should throw an error if it doesn\'t get an string for password and/or username', () => {
        let fn = session.login.bind(session, 1);
        expect(fn).to.throw();
    });


    //logout testing
    it('should have a logout method', () => {
        expect(session).to.have.property('logout');
        expect(session.logout).to.be.a('function');
    });
});
