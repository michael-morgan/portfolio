var express = require('express');
var router = express.Router();
var path = require('path');

var data = require('../portfolio-data.json');

router.get('/', function(req, res, next) {
	res.status(200).json(data);
});

module.exports = router;