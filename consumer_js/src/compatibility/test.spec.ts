import {
  HttpModule
} from '@angular/http';
import {TestBed, getTestBed} from '@angular/core/testing';
import {BookService} from '../app/shared/book.service';
import 'rxjs/add/operator/map';

let Pact = require('pact-web');

const { somethingLike: like, term, eachLike } = Pact.Matchers;

describe("Pact consumer test", () => {


  let provider;

  beforeAll(function (done) {

    provider = Pact({
      consumer: "consumer-js",
      provider: "book"
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

  let service: BookService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        BookService
      ]
    });
    const testbed = getTestBed();
    service = testbed.get(BookService);
  });

  describe("books", () => {
    beforeAll(function (done) {
      provider.addInteraction({
        uponReceiving: 'a request for say hello',
        withRequest: {
          method: 'GET',
          path: term({
            matcher: '/book',
            generate: '/book'
          }),
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: [{"id": 0, "title": "Es", "author": {"id": 0, "firstName": "Stephen", "lastName": "King"}}, {
            "id": 1,
            "title": "Chemie des Todes",
            "author": {"id": 1, "firstName": "Simon", "lastName": "Beckett"}
          }, {
            "id": 2,
            "title": "Per Anhalter durch die Galaxis",
            "author": {"id": 3, "firstName": "Douglas", "lastName": "Adams"}
          }, {"id": 3, "title": "Illuminati", "author": {"id": 2, "firstName": "Dan", "lastName": "Brown"}}, {
            "id": 4,
            "title": "Sakrileg",
            "author": {"id": 2, "firstName": "Dan", "lastName": "Brown"}
          }, {
            "id": 5,
            "title": "Kalte Asche",
            "author": {"id": 1, "firstName": "Simon", "lastName": "Beckett"}
          }, {
            "id": 6,
            "title": "Das Restaurant am Ende des Universums",
            "author": {"id": 3, "firstName": "Douglas", "lastName": "Adams"}
          }]
        }
      }).then(function (data) {
          done()
        }, function (err) {
          done.fail(err)
        })
    });

    it("should get all books successfully", function (done) {
      service.getBooks()
        .subscribe(res => {
            expect(res).toEqual([{"id": 0, "title": "Es", "author": {"id": 0, "firstName": "Stephen", "lastName": "King"}}, {
              "id": 1,
              "title": "Chemie des Todes",
              "author": {"id": 1, "firstName": "Simon", "lastName": "Beckett"}
            }, {
              "id": 2,
              "title": "Per Anhalter durch die Galaxis",
              "author": {"id": 3, "firstName": "Douglas", "lastName": "Adams"}
            }, {"id": 3, "title": "Illuminati", "author": {"id": 2, "firstName": "Dan", "lastName": "Brown"}}, {
              "id": 4,
              "title": "Sakrileg",
              "author": {"id": 2, "firstName": "Dan", "lastName": "Brown"}
            }, {
              "id": 5,
              "title": "Kalte Asche",
              "author": {"id": 1, "firstName": "Simon", "lastName": "Beckett"}
            }, {
              "id": 6,
              "title": "Das Restaurant am Ende des Universums",
              "author": {"id": 3, "firstName": "Douglas", "lastName": "Adams"}
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
