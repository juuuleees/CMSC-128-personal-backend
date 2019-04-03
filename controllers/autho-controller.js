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

let sql = ""; // sql variable to be used to call queries. Improves readability later on

exports.checkAcc = (req, res) => {

	res.setHeader('Content-Type', 'text/plain');

	sql = "select * from testAutho where uname ='" + req.body.username + "' and pword = '" + req.body.password + "';";
	connection.query(sql, function(err, rows){
        if(err)
            res.status(500).json({"Error":err});
        else if(rows.length){
			      res.setHeader('Content-Type', 'text/html');
    		    res.status(200).sendFile(path.join(__dirname, '..', 'samp.html'));
        }else
            res.status(200).send("LOL NOPE");
    });
}

exports.home = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'samp.html'));
}