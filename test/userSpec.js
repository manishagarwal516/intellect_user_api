process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let user = require('../app/models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./bin/ww');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('user', () => {
    beforeEach((done) => { //Before each test we empty the database   
    });
/*
  * Test the /GET route
  */
  describe('/GET user', () => {
      it('it should GET an user', (done) => {
        chai.request(server)
            .get('/user/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });

  describe('/GET user todo', () => {
      it('it should GET an user todo', (done) => {
        chai.request(server)
            .get('/user/activeUsersTodo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});