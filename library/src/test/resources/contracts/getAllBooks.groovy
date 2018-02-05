package contracts

import org.springframework.cloud.contract.spec.Contract

Contract.make {
    request {
        method 'GET'
        url value('/book')
    }
    response {
        headers {
            header('Content-Type', 'application/json;charset=UTF-8')
        }
        status 200
        body("""
   [
    {
      "id": 0,
      "title": "Es",
      "author": {
        "id": 0,
        "firstName": "Stephen",
        "lastName": "King"
      }
    },
    {
      "id": 1,
      "title": "Chemie des Todes",
      "author": {
        "id": 1,
        "firstName": "Simon",
        "lastName": "Beckett"
      }
    },
    {
      "id": 2,
      "title": "Per Anhalter durch die Galaxis",
      "author": {
        "id": 3,
        "firstName": "Douglas",
        "lastName": "Adams"
      }
    },
    {
      "id": 3,
      "title": "Illuminati",
      "author": {
        "id": 2,
        "firstName": "Dan",
        "lastName": "Brown"
      }
    },
    {
      "id": 4,
      "title": "Sakrileg",
      "author": {
        "id": 2,
        "firstName": "Dan",
        "lastName": "Brown"
      }
    },
    {
      "id": 5,
      "title": "Kalte Asche",
      "author": {
        "id": 1,
        "firstName": "Simon",
        "lastName": "Beckett"
      }
    },
    {
      "id": 6,
      "title": "Das Restaurant am Ende des Universums",
      "author": {
        "id": 3,
        "firstName": "Douglas",
        "lastName": "Adams"
      }
    }
  ]
  """)
    }
}