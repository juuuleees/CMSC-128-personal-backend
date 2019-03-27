const mysql = require('mysql');

var connection = mysql.createConnection({
	host      :  'localhost',
	user      :  'root',
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

// adds new data to database
// working version without call procedure

exports.addStore = (req, res) => {
  sql = "insert into store(name, type, address, description, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes) values('" + req.body.name + "','" + req.body.type + "','" + req.body.address + "','" + req.body.description + "','" + req.body.opening_time + "','" + req.body.closing_time + "','" + req.body.price_min + "','" + req.body.price_max + "','" + req.body.delivery + "','" + req.body.bathroom + "','" + req.body.votes + "');";

  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// adds new data to database
// version with call procedure. works if you remove the delivery and bathroom values from procedure, not sure how to remedy that yet
// exports.addStore = (req, res) => {
//   sql = "call create_store('" + req.body.in_name + "','" + req.body.in_type + "','" + req.body.in_address + "','" + req.body.in_opening_time + "','" + req.body.in_closing_time + "','" + req.body.in_price_min + "','" + req.body.in_price_max + "')"
//   console.log(sql);

//   connection.query(sql, function(err, rows){
//     if(err)
//       res.status(500).json({"Error":err});
//     else{
//       res.json(rows);
//     }
//   });

// }

// edits information in database fetched via id
// call procedure version to be fixed later in accordance with database team
exports.editStore = (req, res) => {
  sql = "update store set store_id='" + req.params.store_id + "', name='" + req.body.name + "', type='" + req.body.type + 
        "', address='" + req.body.address + "', description='" + req.body.description +  
        "', opening_time='" + req.body.opening_time + "', closing_time='" + req.body.closing_time + 
        "', price_min='" + req.body.price_min + "', price_max='" + req.body.price_max + 
        "', delivery='" + req.body.delivery + "', bathroom='" + req.body.bathroom + 
        "', votes='" + req.body.votes + "' where store_id='" + req.params.store_id + "';";

  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else{
      res.json(rows);
    }
  });

}

// delete a record from database
// working!!
exports.deleteStore = (req, res) => {
  sql = "call delete_store(" + req.body.store_id + ");";

  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else
      res.json(rows);
  });
}