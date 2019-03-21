var express = require('express'); // For express functions. Almost everything lol
var path = require('path'); // For finding directories and other stuff related

var app = express();  // Initializing server
let port = 6969; // Port where we listen to

// Initialization of body-parser. Actually not needed in this case. We don't need a model, so we don't need to parse any body (specifically used when request.body.<attrib> is invoked in Mongoose)
// var bodyParser = require('body-parser'); // For body-parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const RestoRouter = require('./routes/resto-router');

app.get('/', (req, res) => {
  // You can uncomment this part out to see that res.send() doesn't work twice. Ofc second one is better so I left it uncommented lmao
  // res.send('<h1>AN-94 BEST GRIL</h1><a href="https://img.moegirl.org/common/b/b0/Pic_AN94.png"><img src="https://img.moegirl.org/common/b/b0/Pic_AN94.png" height="500px" alt="AN-94" /></a><br/><a href="/eatwise/all-restos">See all restaurants</a>');
  res.sendFile(path.join(__dirname + '/samp.html')); // Absolute path of html file. Basically sends the intended html file to 'localhost:<port>/'
});

app.use('/eatwise', RestoRouter); // Uses studentrouter and can be invoked by putting 'locahost:<port>/eatwise' on the address bar. Ofc /eatwise has nothing to return except routes lmao

app.listen(port, () => { // Listens to the specified port in the top of this document
	console.log("Listening at port", port);
});
