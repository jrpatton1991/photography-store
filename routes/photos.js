var aws = require('aws-sdk')
var express = require('express');
var router = express.Router();
var Photo = require('../models/photo');
var multer = require('multer');
var multerS3 = require('multer-s3');

var s3 = new aws.S3({
  accessKeyId: process.env.S3KEY,
  secretAccessKey: process.env.S3SECRETKEY
});

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'photo-store-app',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
});

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
router.post('/', upload.single('photoFile'), function(req, res, next) {
  console.log(req.file.location);
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
