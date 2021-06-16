const express = require('express');
const app = express();

const port = 3000

app.get('/show', (req, res) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        port: '3306',
        user: "root",
        password: "redHat@12345",
        database: "intelligaiadb"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from intelligaiausers", function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });


});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


