process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let toDo = require('../app/models/toDo');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./bin/ww');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('toDo', () => {
    beforeEach((done) => { //Before each test we empty the database   
    });
/*
  * Test the /GET route
  */
  describe('/GET toDo', () => {
      it('it should GET an toDo', (done) => {
        chai.request(server)
            .get('/toDo/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });

  describe('/GET specfic user upcoming todo', () => {
      it('it should GET specfic user upcoming todo', (done) => {
        chai.request(server)
            .get('/toDo/specficUsersTodo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});