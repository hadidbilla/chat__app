const createError = require('http-errors');

//404 not found

function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested page is not found"));
}

//default error handler

function errorHandler(err, req, res, next) {
  res.render('error',{
    title: 'Error Page',
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
}