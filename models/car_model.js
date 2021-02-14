const dataBase = require('../database');

const car = {
    getAllCars: function(callback){
        return dataBase.query('SELECT * FROM car', callback);
    },
    getCarById: function(id, callback){
        return dataBase.query('SELECT * FROM car WHERE idcar = ?', [id], callback);
    },
    getCarByBrand: function(value, callback){
        const brandLike = '%' + value + '&';
        return dataBase.query('SELECT * FROM car WHERE brand LIKE ? ORDER BY idcar DESC', [brandLike], callback);
    },
    getCarByModel: function(value, callback){
        const modelLike = '%' + value + '&';
        return dataBase.query('SELECT * FROM car WHERE model LIKE ? ORDER BY idcar DESC', [modelLike], callback)
    },
    getCarByYearModel: function(value, callback){
        const yearmodelLike = '%' + value + '&';
        return dataBase.query('SELECT * FROM car WHERE yearmodel LIKE ? ORDER BY idcar DESC', [yearmodelLike], callback);
    },
    add: function(car, callback) {
        return dataBase.query(
          'INSERT INTO car (brand,model,yearmodel) values(?,?,?)', [car.brand, car.model, car.yearmodel], callback
        );
    },
    delete: function(id, callback) {
        return dataBase.query('DELETE FROM car WHERE idcar=?', [id], callback);
    },
    update: function(id, car, callback) {
        return dataBase.query(
          'UPDATE car SET brand=?, model=?, yearmodel=? WHERE idcar=?', [car.brand, car.model, car.yearmodel, id], callback
        );
    },
};
module.exports = car;