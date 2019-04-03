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

let sql = "";

// returns all movies from database
// working!!
exports.findAllStores = (req, res) => {
  // sql = "call view_all_stores()";
  sql = "select * from store;"
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length){
      // res.send(rows);
      res.status(200).json({"Data":rows});
    }
    else{
      // res.send(null);
      res.status(200).json({"Data":"No records found"});
    }
  });
}

// find a specific movie from database via id
// working!!
exports.findStoreById = (req, res) => {
  sql = "call view_store(" + req.params.store_id + ");"
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length){
      // res.send(rows[0]);
      res.status(200).json({"Data":rows});
    }
    else{
      // res.send(null);
      res.status(200).json({"Data":"No records found"});
    }
  });
}

// adds new data to database
// working version without call procedure

exports.addStore = (req, res) => {
  sql = "call create_store('" + req.query.name + "','" + req.query.resType + "','" + req.query.resLoc + "','" + req.query.resDesc + "','" + req.query.resOpeningTime + "','" + req.query.resClosingTime + "'," + req.query.resPrice + "," + req.query.resPrice + "," + req.query.resDelivery + "," + req.query.resCR + ");";
  try{
    connection.query(sql, function(err, rows){
      if(err)
        res.status(500).json({"Error":err});
    })
  }catch(err) {
    callback(err);
  }

  sql = "select * from store"
  connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length)
            res.status(200).json({"Data":rows});
        else
            res.status(200).json({"Data":"No records found"});
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
    else if(rows.length){
      // res.send(rows);
      res.status(200).json({"Data":rows});
    }
    else{
      // res.send(null);
      res.status(200).json({"Data":"No records found"});
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
    else if(rows.length){
      // res.send(rows);
      res.status(200).json({"Data":rows});
    }
    else{
      // res.send(null);
      res.status(200).json({"Data":"No records found"});
    }
  });
}

exports.randomStore = (req, res) => {
  sql = "select * from store order by rand() limit 1;"
  connection.query(sql, function(err, rows){
    if(err)
      res.status(500).json({"Error":err});
    else if(rows.length){
      // res.send(rows[0]);
      res.status(200).json({"Data":rows});
    }
    else{
      // res.send(null);
      res.status(200).json({"Data":"No records found"});
    }
  });
}

exports.formPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../forms.html')); 
}

exports.test = (req, res) => {
  res.sendFile(path.join(__dirname + '/../samp.html')); 
}