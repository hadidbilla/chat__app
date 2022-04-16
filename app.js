const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookieParser');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB Database Successfully'))
.catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));