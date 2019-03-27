const mysql = require('mysql');

var connection = mysql.createConnection({
	host  :  'localhost',
	user  :  'root',
	password  :  'cheese_ball',
	database  :  'eatwise'
});

let sql = "";

// returns all movies from database
// working!!
exports.findAllStores = (req, res) => {
  sql = "call view_all_stores()";
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows);
  });
}

// find a specific movie from database via id
// working!!
exports.findStoreById = (req, res) => {
  sql = "call view_store(" + req.params.store_id + ");"
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length)
      res.send(rows[0]);
  });
}

// delete a record from database
// working!!
exports.deleteStore = (req, res) => {
  sql = "call delete_store(" + req.body.store_id + ");";
  console.log(res.body)
  console.log(sql)

  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else
      res.json(rows);
  });
}