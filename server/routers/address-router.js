var addressRouter = require('express').Router();

addressRouter.get('/', function (req, res) {
  const ipAddress = req.socket.remoteAddress;
  res.json(ipAddress);
});

module.exports = addressRouter;