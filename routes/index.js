var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "UploadIt!" });
});

router.get('/new-photo', function(req, res, next) {
  res.render('newPhoto', { title: "UploadIt!" });

});

module.exports = router;
