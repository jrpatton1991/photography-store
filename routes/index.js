var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Jacob Patton's world" });
});

router.get('/new-photo', function(req, res, next) {
  res.render('newPhoto', { title: "Jacob Patton's world" });
});

module.exports = router;
