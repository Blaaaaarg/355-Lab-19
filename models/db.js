var mysql = require('mysql');

// configure database connection
var connection = mysql.createConnection( {
    host: 'localhost',
    user: 'swalker',
    password: '3453273'
});

var userDB = 'swalker',
    createDB = 'CREATE DATABASE IF NOT EXISTS ' + userDB;

connection.query(createDB, function (err) {
    if (err) throw err;
    var useQuery = 'USE ' + userDB;
    
    connection.query(useQuery, function (err) {
        if (err) throw err;

        var createTable = 'CREATE TABLE IF NOT EXISTS p2_user('
            + 'UID int PRIMARY KEY AUTO_INCREMENT,'
            + 'Name varchar(100) NOT NULL,'
            + 'email varchar(255) NOT NULL,'
            + 'Password varchar(50) NOT NULL'
            + ');';

        connection.query(createTable, function (err) {
            if (err) throw err;
        });
    });
});

exports.GetAll = function(callback) {
    connection.query('select UID, email from p2_user',
                     function (err, result) {
                         if (err) {
                             console.log(err);
                             callback(true);
                             return;
                         }
                         callback(false, result);
                     }
    );
}

exports.Insert = function(userInfo, callback) {
    connection.query('INSERT INTO p2_user SET ?', userInfo,
                    function(err, result) {
                        if (err) {
                            console.log(err);
                            callback(true);
                            return;
                        }
                        callback(false, result);
                    }
    );
}
