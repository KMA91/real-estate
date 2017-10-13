var upload = require('./../controllers/uploadController.js');
var user = require('./../controllers/userController.js');

module.exports = (app) => {
  app.post("/api/upload", upload.uploadImage);
  app.post("/api/addlisting", upload.addListing);
  app.post("/api/removeImage", upload.removeImage);
}
