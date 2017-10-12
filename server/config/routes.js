var upload = require('./../controllers/uploadController.js');
var user = require('./../controllers/userController.js');

module.exports = (app) => {
  app.post("/api/upload", upload.uploadImage);
}
