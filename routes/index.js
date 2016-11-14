var express = require('express');
var router = express.Router();

var defaultCallback = function(req, res, next) {
	res.render('index');
};

/* GET home page. */
router.get('/', defaultCallback);
router.get('/about', defaultCallback);
router.get('/contact', defaultCallback);

module.exports = router;