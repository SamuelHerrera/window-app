// ./main.js
const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path');
const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const apiserver = express();
const api = require('./src/api');

require('dotenv').config();
require('electron-reload')(__dirname, {
  electron: require('${__dirname}/../../node_modules/electron')
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
const port = process.env.PORT || '3000';
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

  // Specify entry point
  win.loadURL(process.env.HOST);

  win.webContents.openDevTools();

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
