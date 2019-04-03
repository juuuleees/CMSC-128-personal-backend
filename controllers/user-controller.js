// Initialization of MySQL connection
var path = require('path'); // For finding directories and other stuff related
var mysql = require('mysql');
var connection = mysql.createConnection({
  // Initialize the essentials
  host     : 'localhost', // Where your app will be hosted
  user     : 'root', // Name of user. Basically me lmao
  password : '', // Password. Now you know me pass kek
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

exports.findAllUsers = (req, res) => {
	sql = "call view_all_users()"; // Press F for "select *" kek
    connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
    });
}

exports.findUserByID = (req, res) => {
	sql = "call view_user(" + req.params.user_id + ")"; // params.restaurant_id here was passed from /:studno in User-router.js
	connection.query(sql, function(err, rows){
		if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
	});
}

exports.formPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../user-forms.html')); 
}

exports.add = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  sql = "call create_user('" + req.body.username + "','" + req.body.password + "','" + req.body.email + "')";
  try{
    connection.query(sql, function(err, rows){
      if(err)
        res.status(500).json({"Error":err});
    })
  }catch(err) {
    callback(err);
  }

  sql = "call view_all_users()"
  connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
    });
}

exports.delete = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  sql = "delete_user('" + req.body.user_id + "')";
  try{
    connection.query(sql, function(err, rows){
      if(err)
        res.status(500).json({"Error":err});
    })
  }catch(err) {
    callback(err);
  }

  sql = "call view_all_users()"
  connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
    });
}