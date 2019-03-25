/*
+---------------------------------------------------------------+
| movie-controller.js                                           |
+---------------------------------------------------------------+
| Basically a collection of functions.                          |
|                                                               |
| Also where connection to database is established.             |
| Change user and password to your own credentials before       |
| running. Also, load up moviesample database because that is   |
| what was used for this "skeleton". SQL file is included       |
| in the movie-server function.                                 |
|                                                               |
| To load database:                                             | 
|   make sure that you are in movie-server directory before     |
|   booting mysql,                                              |
|   input the code                                              |
|      "source moviesample.sql;"                                |
+---------------------------------------------------------------+
*/

// import mysql package
const mysql = require('mysql');

// set-up mysql info
var connection = mysql.createConnection({
  host      :   'localhost',
  user      :   'root',
  password  :   '',
  database  :   'moviesample' 
});

/**
 * connection.query(<sql_query>, [arguments], function(err, <data_returned>){...})
 * NOTE: the '?' acts as placeholders for the arguments (same with C).
 *    argument order must be correct 
 */

let sql = "";

// returns all movies from database
exports.findAll = (req, res) => {
  sql = "select * from movie;";
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows);
  });
}

// find a specific movie from database via id
exports.findById = (req, res) => {
  sql = "select * from movie where _id = ?;"
  connection.query(sql, [req.params._id], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows[0]);
  });
}

// adds new data to database
exports.add = (req, res) => {
  sql = "insert into movie(title, year, actor, director, franchise) values(?,?,?,?,?);";

  connection.query(sql, [req.body.title, req.body.year, req.body.actor, req.body.director, req.body.franchise], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// edits information in database fetched via id
exports.edit = (req, res) => {
  sql = "update movie set title=?, year=?, actor=?, director=?, franchise=? where _id=?;";

  connection.query(sql, [req.body.title, req.body.year, req.body.actor, req.body.director, req.body.franchise, req.body._id], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// delete a record from database
exports.delete = (req, res) => {
  sql = "delete from movie where title = ?";

  connection.query(sql, [req.body.title], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else
      res.json(rows);
  });
}