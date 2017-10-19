let mongoose = require('mongoose')
var Listing = mongoose.model('Listing');

// USED TO UPLOAD IMAGES INTO s3 BUCKET
var multer = require('multer');
var multers3 = require('multer-s3');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();

var upload = multer({
    storage: multers3({
        s3: s3,
        bucket: 'mean-realestate',
        contentType: multers3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        }
    })
}).single('file');


module.exports = {
  uploadImage: (req, res) => {
    upload(req,res,function(err){
          if(err){
		return res.json({error_code:1,err_desc:err});
          }else{
		console.log(req.file);
		console.log("**********************");
          	return res.json(req.file);
	  }
      });
  },

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  addListing: (req, res) => {
    var listing = new Listing(req.body);
    listing.save((err, listing) => {
      if(err){
        res.status(500).send("Make sure to add an address, Tony!")
      }else{
        return;
      }
    })
  },

  removeImage: (req, res) => {
    var params = { Bucket: 'mean-realestate', Key: req.body.key};
    s3.deleteObject(params, function (err, data) {
      if(data){
      }else{
      }
    })
    return;
  }
}
