const express = require('express');
const router = express.Router();
const owner = require('../models/owner_model');

router.get('/:id?',
    function (request, response) {
        if (request.params.id) {
            owner.getOwnerById(request.params.id, function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    console.log(dbResult[0]);
                    response.json(dbResult[0]);
                }
            });
        } else {
            owner.getAllOwner(function (err, dbResult) {
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
        owner.add(request.body, function (err, dbResult) {
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
        owner.delete(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult.affectedRows);
            }
        });
    });


router.put('/:id',
    function (request, response) {
        owner.update(request.params.id, request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });

module.exports = router;