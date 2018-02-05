import {
  HttpModule
} from '@angular/http';
import {TestBed, getTestBed} from '@angular/core/testing';
import {LendingService} from '../app/shared/lending.service';
import 'rxjs/add/operator/map';

let Pact = require('pact-web');

describe("Pact consumer test", () => {


  let provider;

  beforeAll(function (done) {

    provider = Pact({
      consumer: "consumer-js",
      provider: "lending"
    });
    setTimeout(done, 200);
  });

  afterAll(function (done) {
    provider.finalize()
      .then(function () {
        done();
      }, function (err) {
        done.fail(err)
      })
  });

  let service: LendingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        LendingService
      ]
    });
    const testbed = getTestBed();
    service = testbed.get(LendingService);
  });

  describe("lending", () => {
    beforeAll(function (done) {
      provider.addInteraction({
        uponReceiving: 'a request for testing the lending service',
        withRequest: {
          method: 'GET',
          path: '/lendings.json',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: [{
            "id": 1,
            "created_at": "2017-10-22T15:49:55.000Z",
            "updated_at": "2017-10-22T20:31:52.000Z",
            "title": "Es123",
            "return_date": "2017-11-01"
          }]
        }
      }).then(function (data) {
        done()
      }, function (err) {
        done.fail(err)
      })
    });

    it("should get all lendings successfully", function (done) {
      service.getAllLendings()
        .subscribe(res => {
            expect(res).toEqual([{
              "id": 1,
              "created_at": "2017-10-22T15:49:55.000Z",
              "updated_at": "2017-10-22T20:31:52.000Z",
              "title": "Es123",
              "return_date": "2017-11-01"
            }]);
            done();
          },
          err => {
            done.fail(err)
          })
    });

    describe("verify all pact interactions were called", () => {
      // verify with Pact, and reset expectations
      it('successfully verifies', function (done) {
        console.log('CLOSE PACTS');
        provider.verify()
          .then(function (a) {
            done();
          }, function (e) {
            done.fail(e)
          })
      })
    })
  });

});
