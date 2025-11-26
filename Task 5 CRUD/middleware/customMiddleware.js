const customMiddleware = (req, res, next) => {
  let verify = true;
  if (!verify) {
    return res.send("user not verified");
  }
  next();
};

module.exports = customMiddleware;
