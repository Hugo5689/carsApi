const dataBase = require('../database');

const carowner = {
    getAllCarOwner: function(callback){
        return dataBase.query('SELECT * FROM carowner ORDER BY idcarowner DESC', callback);
    },
    getCarOwnerByID: function(id, callback){
        return dataBase.query('SELECT * FROM carowner WHERE idcarowner=?', [id], callback);
    },
    getAllOwnerCarPair: function(callback){
        return dataBase.query(
            'SELECT owner.idowner, CONCAT(firstname," ", lastname) AS "name", GROUP_CONCAT(CONCAT(brand," ", model)) AS "cars of the person" FROM owner INNER JOIN carowner ON owner.idowner=carowner.idowner INNER JOIN car ON car.idcar=carowner.idcar GROUP BY owner.idowner', callback
        );
    },
    getOwnerCarByName: function(value, callback){
        const ownerNameLike = '%' + value + '%';
        return dataBase.query('SELECT owner.idowner, CONCAT(firstname," ", lastname) AS "name", GROUP_CONCAT(CONCAT(brand," ", model)) AS "cars of the person" FROM owner, carowner, car WHERE owner.idowner=carowner.idowner AND car.idcar=carowner.idcar AND (owner.firstname LIKE ? OR lastname LIKE ?) GROUP BY owner.idowner', [ownerNameLike], callback);
    },
    /*==========================================================================*
     * Interesting, 4s faster then Inner join                                   *
     * SELECT owner.idowner,                                                    *
     *        CONCAT(firstname," ", lastname) AS "name",                        *
     *        GROUP_CONCAT(CONCAT(brand," ", model)) AS "cars of the person"    *
     * FROM owner, carowner, car                                                *
     * WHERE owner.idowner=carowner.idowner AND car.idcar=carowner.idcar        *
     * GROUP BY owner.idowner                                                   *
     ===========================================================================*/
    add: function(carowner, callback){
        return dataBase.query(
            'INSERT INTO carowner (idcar,idowner) values(?,?)', [carowner.idcar, carowner.idowner], callback
        );
    },
    delete: function(id, callback) {
        return dataBase.query('DELETE FROM carowner WHERE idcarowner=?', [id], callback);
    },
    update: function(id, carowner, callback) {
        return dataBase.query(
          'UPDATE carowner SET idcar=?, idowner=? WHERE idcarowner=?', [carowner.idcar, carowner.idowner, id], callback
        );
    }
};

module.exports = carowner;