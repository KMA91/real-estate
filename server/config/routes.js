var upload = require('./../controllers/uploadController.js');
var user = require('./../controllers/userController.js');
var listing = require('./../controllers/listingController.js')

module.exports = (app) => {
  app.post("/api/upload", upload.uploadImage);
  app.post("/api/addlisting", upload.addListing);
  app.post("/api/removeImage", upload.removeImage);
  app.get("/api/getThreeListings", listing.getThreeListings);
  app.get("/api/getActive", listing.getActive);
  app.get("/api/getSold", listing.getSold);
  app.get("/api/getListing/:id", listing.getListing);
}
