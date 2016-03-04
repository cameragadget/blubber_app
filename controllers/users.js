function index(req, res, next) {
  res.send('respond with a resource');
};

function show(req, res, next) {
  res.send('show a user!');
};


module.exports = {
  index: index,
  show: show
}
