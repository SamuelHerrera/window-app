// ./main.js
const {app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const apiserver = express();
const api = require('./api');

var appTCP = express();
var serverTCP = require('http').createServer(appTCP);
var io = require('../..')(serverTCP);
var portTCP = '3001';

//java TCP side-----------------------------------------------------------------------------

serverTCP.listen(portTCP, function () {
  console.log('Server listening at port %d', port);
});

// Routing
appTCP.use(express.static(path.join(__dirname, 'dist')));

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    socket.broadcast.emit('message', data);
  });
});

//server side-------------------------------------------------------------------------------
// Parsers
apiserver.use(bodyParser.json());
apiserver.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
apiserver.use(express.static(path.join(__dirname, 'dist')));

// API location
apiserver.use('/api', api);

// Send all other requests to the Angular app
apiserver.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = '3000';
apiserver.set('port', port);

const server = http.createServer(apiserver);

server.listen(port, () => console.log(`Running on localhost:${port}`));

//electron side-------------------------------------------------------------------------------

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      webSecurity: false
    }
  });

  win.loadURL('file://' + __dirname + '/index.html');

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
