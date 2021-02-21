const express = require('express');
const router = express.Router();
const car = require('../models/car_model');

router.get('/:id?',
    function (request, response) {
        if (request.params.id) {
            car.getCarById(request.params.id, function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    console.log(dbResult[0]);
                    response.json(dbResult[0]);
                }
            });
        } else {
            car.getAllCars(function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            });
        }
    });


router.post('/',
    function (request, response) {
        car.add(request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        });
    });


router.delete('/:id',
    function (request, response) {
        car.delete(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult.affectedRows);
            }
        });
    });


router.put('/:id',
    function (request, response) {
        car.update(request.params.id, request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });

router.get('/brand/:value?', function (request, response) {
    car.getCarByBrand(request.params.value, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.get('/model/:value?', function (request, response) {
    car.getCarByModel(request.params.value, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.get('/yearmodel/:value?', function (request, response) {
    car.getCarByYearModel(request.params.value, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;