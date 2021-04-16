//Used to reduce the repeative code try-catch
//This function will return a function and if any error occurs, the error will go to the glboal middleware

module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
