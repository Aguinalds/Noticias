var mysql = require('mysql');

var connMySQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'Naldo',
        password: '87085882g',
        database: 'potal_noticias'
    });
}
module.exports = function () { 
    return connMySQL;
}

