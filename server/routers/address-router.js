var addressRouter = require('express').Router();
const WebSocket = require('ws');
const socket = require('socket.io');
const requestIP = require('request-ip');

addressRouter.get('/', function (req, res) {
  const ipAddress = requestIP.getClientIp(req);
  res.json(ipAddress);
});

module.exports = addressRouter;