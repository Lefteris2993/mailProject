var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();

var connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'lefto',
    password: 'serifos',
    database: 'MailProject'
});

app.use(cors());

app.get('/login', function(req, res) {
    console.log(req.headers.username);
    connection.getConnection(function(err, tempCon) {
        if (err) {
            tempCon.release();
            console.log(err)
        } else {
            const query = "SELECT UserID FROM Users WHERE UserName='" + req.headers.username + "' AND Password='" + req.headers.password + "'";
            tempCon.query(query, function(err, rows, fields) {
                tempCon.release();
                console.log(rows.length);
                if (err) console.log(err);
                else if (rows.length === 1) {
                    res.send(rows[0].UserID.toString());
                } else res.send('-1');
            })
        }
    })
})

app.get('/register', function(req, res) {
    console.log(req.headers);
    connection.getConnection(function(err, tempCon) {
        if (err) {
            tempCon.release();
            console.log(error);
        } else {
            const query = "INSERT INTO `Users` (`UserName`, `Password`) VALUES ('" + req.headers.username + "', '" + req.headers.password + "')"
            tempCon.query(query,
                function(err, rows, fields) {
                    tempCon.release();
                    if (err) console.log(err);
                })
        }
    });
    res.send('OK');
});


app.get('/', function(req, resp) {
    console.log(req);
    connection.getConnection(function(error, tempCon) {
        if (error) {
            tempCon.release();
            console.log(error);
        }
        else {
            console.log('connected');
            tempCon.query("select * from Users", function(error, rows, fields) {
                tempCon.release();
                if (error) {
                    console.log(error);
                } else {
                    console.log(rows);
                    resp.send('<b>Hello ' + rows[0].UserName + '</b>');
                }
            })
        }
    });
    
});

app.listen(6969);