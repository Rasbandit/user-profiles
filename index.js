const express = require('express')
,   session = require('express-session')
,   bodyParser = require('body-parser')
,   cors = require('cors')
,   config = require('./config.js')
,   profileCtrl = require('./controllers/profileCtrl.js')
,   userCtrl = require('./controllers/userCtrl.js')
,   port = 3000;

var corsOptions = {
  origin: 'http://localhost:3000'
};

var app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}))


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends)

app.listen(port, function() {
  console.log('The ship is docked at port: ', port)
})
