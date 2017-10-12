let mongoose = require('mongoose')
var multer = require('multer');
var multers3 = require('multer-s3');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3_config.json');
var s3 = new AWS.S3();

var upload = multer({
    storage: multers3({
        s3: s3,
        bucket: 'mean-realestate',
        key: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        }
    })
}).single('file');


module.exports = {
  uploadImage: (req, res) => {
    upload(req,res,function(err){
          if(err){
               res.json({error_code:1,err_desc:err});
               return;
          }
          return res.json(req.file);
      });
  }
}
