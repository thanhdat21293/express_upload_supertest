/**
 * Created by thanhdat21293 on 3/6/17.
 */
const server = require('./../index.js');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
chai.should();

let log = console.log;

describe('Phuong trinh bac 2', () => {

    it('respond with ptb2', (done) => {
        request(server)
            .post('/')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                let resB = res.body;
                //log(resB);

                let a = resB.a, b = resB.b, c = resB.c;

                res.body.should.have.property('a');
                if (isNaN(a)) {
                    throw new Error('a is not number')
                }

                res.body.should.have.property('b');
                if (isNaN(b)) {
                    throw new Error('b is not number')
                }

                res.body.should.have.property('c');
                if (isNaN(c)) {
                    throw new Error('c is not number')
                }

                done();
            });
    });
});

describe('Su dung cookie', () => {

    const agent = request.agent(server);

    it('Should save cookies', (done) => {
        agent
            .get('/test1')
            .expect('set-cookie', 'thanhdat=abc; Path=/', done);
    });

    it('Should send cookies', (done) => {
        agent
            .get('/test1')
            .expect('', done);
    });
});