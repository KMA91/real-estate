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
  },

  getActive: (req, res) => {
    Listing.find({sold: false}, (err, listings) =>{
      if(err){
        console.log(err);
      }else{
        return res.json(listings);
      }
    })
  },

  getSold: (req, res) => {
    Listing.find({sold: true}, (err, listings) =>{
      if(err){
        console.log(err);
      }else{
        return res.json(listings);
      }
    })
  },

  getListing: (req, res) => {
    Listing.findOne({_id: req.params.id}, (err, listing) => {
      if(err){
          return res.sendStatus(500);
      } else {
          return res.json(listing);
      }
    })
  },

}
