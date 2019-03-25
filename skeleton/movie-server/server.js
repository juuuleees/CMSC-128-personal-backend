/*
+---------------------------------------------------------------+
| server.js 													|
+---------------------------------------------------------------+
| I got this junk from a past CMSC100 exer and I can't really 	|
| remember what most of these things here do. I just slightly 	|
| modified this file by removing the mongoose import statement.	|
+---------------------------------------------------------------+
*/

// import package 'express' to handle rounting
const express = require('express');
const app = express();

// for CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// import package 'body-parser' in order to read HTTP body (?)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup routes
const MovieRouter = require('./routes/movie-router');
app.use('/movie', MovieRouter);

// display homepage
app.get('/', (req, res) => {
  res.send('API is working!');
});

// initiate port
app.listen(3001, (err) => {
  if (err) { console.log(err); }
  else { console.log('\nMovie server is running at http://localhost:3001'); }
});

