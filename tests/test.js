let chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

//var server = require('../server/app');
//import { expect } from 'chai';
//import tags from 'mocha-tags';
var axios = require('axios');

const api = 'https://petstore.swagger.io/v2';
const path = '/pet/99';


//tags('api-test')
    describe('get all users', () => {
      it('get pet data', async () => {
        let data = await axios.get(path)
 //         .set('Content-Type', 'application/json');
  //    done(console.log(response.status))
        let response = data.response
        expect(response.status).to.have.status(200);
      });
      
      it('should be able to create a site', async () => {
        const response = await axios.get('/pet/99')
        //  .set('Content-Type', 'application/json');
        expect(response).to.have.status(200);
      }); /*
      var petData = {
        id: 1,
        category: {
          id: 1,
          name: 'koppeck'
        },
        "name": 'deneme',
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "dene"
          }
        ],
        "status": "available"
      }

      it('should send parameters to : /path POST', function(done) {
        chai
            .request(api)
            .post(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({petData: 'test'})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });

    */
  });

    
    describe('Array', function () {
      describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
    });



