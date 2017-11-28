const {app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');
const bodyParser = require('body-parser');
const apiserver = require('express')();
const api = require('./api');
const http = require('http').Server(apiserver);
const io = require('socket.io')(http);


//server side-------------------------------------------------------------------------------

apiserver.use(bodyParser.json());

apiserver.use(bodyParser.urlencoded({ extended: false}));

apiserver.use(require('express').static(path.join(__dirname, 'dist')));

apiserver.use('/api', api);

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    socket.broadcast.emit('message', data);
  });
});

http.listen('3000', () => console.log(`Running on localhost:${port}`));

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
