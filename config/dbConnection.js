var mysql = require('mysql');

module.exports = function (){
    return mysql.createConnection({
        host : 'localhost',
        user : 'Naldo',
        password : '87085882g',
        database : 'potal_noticias'
    });
}

