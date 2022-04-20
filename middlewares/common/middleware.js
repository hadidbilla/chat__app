const createError = require("http-errors");

//404 not found

function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested page is not found"));
}

//default error handler

function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 5000);
  // res.render("error", {
  //   title: "Error Page",
  // });

  if(res.status.html){
    res.render("error",{
      title:"Error Page"
    });
  }
  else{
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
