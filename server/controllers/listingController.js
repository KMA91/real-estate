let mongoose = require('mongoose')
var Listing = mongoose.model('Listing');

module.exports = {
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
  },

  getThreeListings: (req, res) => {
    Listing.find({}).sort('-createdAt').limit(3).exec((err, listing) => {
      if(err){
      }else{
        return res.json(listing);
      }
    })
    return;
  }

}
