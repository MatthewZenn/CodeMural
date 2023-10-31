const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');
require('@electron/remote/main').initialize();

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1920, height: 1080, resizable: true, frame:false, webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }, icon: "Assets/Animate.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.maximize();
});

ipcMain.on('minimize', () => {
  mainWindow.minimize();
  //win.hide();
});