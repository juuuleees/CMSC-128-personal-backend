// am using Postman to check all of these kasi tinatamad ako gumawa ng 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const StoreRouter = require('./store-router');
app.use('/eatwise', StoreRouter);

app.listen(3019, (err) => {
	if (err) { console.log(err); }
	else { console.log("Eatwise server operational. Access point at http://localhost:3019.")}
})