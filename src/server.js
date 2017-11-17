const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./config/database.js')

mongoose.connect(url, {
	useMongoClient: true
})
// settings

app.set('port', process.env.PORT || 3000);

// middlewares
	

//routes

//static files

app.listen(app.get('port'), () => {

	console.log('server is running on port ', app.get('port'));
});