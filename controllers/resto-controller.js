// Initialization of MySQL connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  // Initialize the essentials
  host     : 'localhost', // Where your app will be hosted
  user     : 'root', // Name of user. Basically me lmao
  password : 'cheese_ball', // Password. Now you know me pass kek
  database : 'eatwise' // DB to be used
});


// This is testing the  connection to the database and checking for errors. Originally in app.js.
// You can transfer this and the top block of text back to test the connection in app.js alone

// connection.connect(function(err) {
//  if (err)    throw err;
//  console.log("Connected to DB!");
//  // connection.query(sql, function (err, result, fields) {
//  //  if (err)    throw err;
//  //  console.log(result);
//  })
// });

let sql = ""; // sql variable to be used to call queries. Improves readability later on

exports.findAllRestos = (req, res) => {
	sql = "select * from restaurant"; // Press F for "select *" kek
    connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
    });
}

exports.findRestoByID = (req, res) => {
	sql = "select * from restaurant where restaurant_id = " + req.params.restaurant_id; // params.restaurant_id here was passed from /:studno in resto-router.js
	connection.query(sql, function(err, rows){
		if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
	});
}