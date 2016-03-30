var mysql = require('mysql');
var path = require('path');
var fs = require('fs');

var db_port = process.env.DB_PORT;
var db_host = process.env.DB_HOST;


var https = require("https");
var moment = require('moment');
moment.locale('ko');

var config = {
    host: db_host,
    port: db_port,
    user: 'sojong',
    password: 'sojong',
    database: 'logdb'
};

var conn = mysql.createConnection(config);


exports.test = function (req, res) {
    conn.query("SELECT usercode, category FROM Logs;", function (err, rows) {
        if (err) throw err;
        else {
            if (rows == undefined) {
                res.send('fail')
            } else {
                res.contentType('application/json; charset=utf-8');
                res.write('{\"result\":')
                res.write(JSON.stringify(rows));
                res.write('}');
                res.end();
            }
        }
    });

};


