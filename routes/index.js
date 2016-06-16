var express = require('express');
var router = express.Router();
var Photo = require('../models/photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Jacob Patton's world" });
});

module.exports = router;
