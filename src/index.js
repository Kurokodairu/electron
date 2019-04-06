const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron');
const menu = new Menu()

var mainWindow = null;

app.on('ready', function() {

    mainWindow = new BrowserWindow({width: 900, height: 500, icon: __dirname + '/Icon/icon.ico', frame:true});
    mainWindow.loadURL('file://' + __dirname + '/pages/index.html');


    // When the window is closing
    mainWindow.on('closed', function() {
        mainWindow = null;
    });


});
