const dataBase = require('../database');

const owner = {
    getAllOwner: function(callback) {
        return dataBase.query('SELECT * FROM owner ORDER BY idowner DESC', callback);
    },
    getOwnerById: function(id, callback) {
        return dataBase.query('SELECT * FROM owner WHERE idowner=?', [id], callback);
    },
    add: function(owner, callback) {
        return dataBase.query(
            'INSERT INTO owner (firstname,lastname,streetaddress) values(?,?,?)', [owner.firstname, owner.lastname, owner.streetaddress], callback
        );
    },
    delete: function(id, callback) {
        return dataBase.query('DELETE FROM owner WHERE idowner=?', [id], callback);
    },
    update: function(id, owner, callback) {
        return dataBase.query(
            'UPDATE owner SET firstname=?, lastname=?, streetaddress=? WHERE idowner=?', [owner.firstname, owner.lastname, owner.streetaddress, id], callback
        );
    }
};

module.exports = owner;