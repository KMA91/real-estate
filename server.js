const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const COConfig = require('./server/config/crossOriginConfig');
const session = require('express-session');
const sessionInfomation = {
  secret:'theMostSecureSecretKeyEver',
  resave:false,
  saveUninitialized: true,
  name:'myCookie',
  cookie: {
  secure: false,
  httpOnly:false,
  maxAge: 36000000
  }
}
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./server/config/config.json');
app.use(COConfig);
app.use(session(sessionInfomation));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', "dist")));
require('./server/config/mongoose.js');

// //////////////////////////////////////////

var route = require('./server/config/routes.js')(app)

app.get('*', (req,res)=>{
  res.sendFile(path.resolve('public/dist/index.html'))
})

app.listen(6789,()=>console.log("Listening on port 6789"));
