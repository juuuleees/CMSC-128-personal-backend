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
  password  :   'cheese_ball',
  database  :   'eatwise' 
});

/**
 * connection.query(<sql_query>, [arguments], function(err, <data_returned>){...})
 * NOTE: the '?' acts as placeholders for the arguments (same with C).
 *    argument order must be correct 
 */

let sql = "";

// returns all movies from database
exports.findAll = (req, res) => {
  sql = "call create_store(?,?,?,?,?,?,?,?,?);";
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows);
  });
}

// find a specific movie from database via id
exports.findById = (req, res) => {
  sql = "select * from store where store_id = ?;"
  connection.query(sql, [req.params.store_id], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows[0]);
  });
}

// adds new data to database
exports.add = (req, res) => {
  sql = "insert into store(store_id, name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

  connection.query(sql, [req.body.store_id, req.body.name, req.body.type, req.body.address, req.body.description, req.body.longitude, req.body.latitude, req.body.opening_time, req.body.closing_time, req.body.price_min, req.body.price_max, req.body.delivery, req.body.bathroom, req.body.votes], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// edits information in database fetched via id
exports.edit = (req, res) => {
  sql = "update movie set store_id=?, name=?, type=?, address=?, description=?, longitude=?, latitude=?, opening_time=?, closing_time=?, price_min=?, price_max=?, delivery=?, bathroom=?, votes=? where store_id=?;";

  connection.query(sql, [req.body.store_id, req.body.name, req.body.type, req.body.address, req.body.description, req.body.longitude, req.body.latitude, req.body.opening_time, req.body.closing_time, req.body.price_min, req.body.price_max, req.body.delivery, req.body.bathroom, req.body.votes, req.body.store_id], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// delete a record from database
exports.delete = (req, res) => {
  sql = "delete from store where store_id = ?";

  connection.query(sql, [req.body.store_id], function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else
      res.json(rows);
  });
}