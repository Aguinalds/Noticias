var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : process.env.HOST,
		user : process.env.DB_USER,
		password : process.env.DB_PASS,
		database : process.env.DB_BANCO
	});
}

module.exports = function () {
	return connMySQL;
}