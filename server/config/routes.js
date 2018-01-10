var upload = require('./../controllers/uploadController.js');
var user = require('./../controllers/userController.js');
var listing = require('./../controllers/listingController.js')
const multerUpload = require('../config/multer');

module.exports = (app) => {
  app.post("/api/login", user.login);
  app.post("/api/upload", upload.uploadImage);
  app.post("/api/addlisting", listing.addListing);
  app.post("/api/removeImage", upload.removeImage);
  app.post("/api/changeStatus", listing.changeSoldStatus);
  app.post("/api/deleteImage", listing.deleteImage);
  app.post("/api/deleteListing", listing.deleteListing);
  app.post("/api/addMoreImages", listing.addMoreImages);
  app.post("/api/changeAddress", listing.changeAddress);
  app.get("/api/isloggedin", user.isLoggedIn);
  app.get("/api/getActive", listing.getActive);
  app.get("/api/getSold", listing.getSold);
  app.get("/api/getListing/:id", listing.getListing);
  app.get("/api/getAllListings", listing.getAllListings);
  app.get("/api/logout", user.logout);
}
