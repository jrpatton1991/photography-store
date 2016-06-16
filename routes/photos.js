var express = require('express');
var router = express.Router();
var Photo = require('../models/photo');

// GET /photos

router.get('/', function(req, res, next) {
  Photo.find({}, function(err, photos) {
      if (err) {
        res.status(500).send();
      } else {
        res.json(photos);
      }
    });
})


// POST /photos
router.post('/', function(req, res, next) {
  console.log(req.body);
  // Take photoFile and upload to S3

  // Take the url from S3, and save to mongo

  // redirect
  res.redirect('/new-photo')
});


module.exports = router;


// router.use('/photos', function(req, res, next) {
//   Student.findOne({ 'largeUrl': req.params.largeUrl }, function(err, photo) {
//     if (err) {
//       res.status(500).send();
//     } else {
//       if (photo) {
//         res.photo = photo;
//         next();
//       } else {
//         res.status(404).send();
//       }
//     }
//   });
// });
