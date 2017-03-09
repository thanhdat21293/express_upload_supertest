const server = require('./../index.js');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
chai.should();

let log = console.log;

describe('Upload photo file', () => {
    it('Check png', (done) => {
        request(server)
            .post('/test_upload')
            .expect('Content-Type', 'multipart/form-data')
            .set('Accept', 'application/json')
            .field('name', 'anh')
            .attach('photo', 'images/abc.jpeg')
            .expect(200)
            .end( (err, res) => {
                let image = res.body.image;
                let img_name = image.split('.')[0];
                let img_ext = image.split('.')[1];
                let name_old = img_name.split('-')[1];
                console.log(name_old + '.' + img_ext);
                done();
            })
    })
})
