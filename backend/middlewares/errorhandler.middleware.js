function errorHandler(err, req, res, next) {
  if (err.message && err.message.includes("not found")) {
    res.status(404).send({
      message: "404 Not found",
      err: { message: err.message }
    });
  }
  res.status(500).send({
    message: "Internal server error.",
    err: { message: err.message }
  });
}

module.exports = errorHandler;
