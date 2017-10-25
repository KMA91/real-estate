let mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  login: (req, res)=>{
    User.findOne({username:req.body.username}, function(err, user){
      if(err){
        return res.status(500).send("Something went wrong.");
      }
      if(!user){
        return res.status(404).send("Username or Password does not match.");
      }
      if(req.body.password == user.password){
        req.session.user = user;
        console.log("success");
        return res.json(user);
      }else{
          return res.status(401).send("Password does not match.")
        }
    })
  }
}
