const express = require('express');
const router = express.Router();
const carowner = require('../models/carowner_model');

router.get('/:id?',
    function (request, response) {
        if (request.params.id) {
            carowner.getCarOwnerByID(request.params.id, function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    console.log(dbResult[0]);
                    response.json(dbResult[0]);
                }
            });
        } else {
            carowner.getAllCarOwner(function (err, dbResult) {
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
        carowner.add(request.body, function (err, dbResult) {
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
        carowner.delete(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult.affectedRows);
            }
        });
    });


router.put('/:id',
    function (request, response) {
        carowner.update(request.params.id, request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });

router.get('/cars/:value?',
    function (request, response) {
        if(request.params.value){
            carowner.getOwnerCarByName(request.params.value, function(err, dbResult){
                if(err) {
                    response.json(err);
                } else {
                    console.log(dbResult[0]);
                    response.json(dbResult[0]);
                }
            });
        } else {
            carowner.getAllOwnerCarPair(function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    console.log(dbResult);
                    response.json(dbResult);
                }
            });
        }
    }
)

module.exports = router;