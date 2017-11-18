process.env.NODE_ENV = 'test';

let toDo = require('../models/toDoModel.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('toDo', () => {
    beforeEach((done) => { //Before each test we empty the database   
        done();
    });
/*
  * Test the /GET route
  */
  describe('/GET toDo', () => {
      it('it should GET an toDo', (done) => {
        chai.request(server)
            .get('/toDo/1')
            .end((res) => {
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
            .end((res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});