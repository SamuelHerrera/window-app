// ./main.js
const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();

require('electron-reload')(__dirname, {
  electron: require('${__dirname}/../../node_modules/electron')
});

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
