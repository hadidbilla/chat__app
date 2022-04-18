//external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const {errorHandler,notFoundHandler} = require('./middlewares/common/middleware');

const app = express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB Database Successfully'))
.catch(err => console.log(err));

//request parser
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parser cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//route setup


// 404 not found handler
app.use(notFoundHandler);


//common error handling
app.use(errorHandler);


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));