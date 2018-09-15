const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const ipc = require('electron').ipcMain;
const fs = require('fs');
const Datastore = require('nedb');
const favoritesApi = require('./electron/favoritesApi');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
global.db = {};

// TODO
// add check for update onload and on every 1 hour

// configure local database
const userDataPath = app.getPath('userData');
const favoritesStoragePath = userDataPath + '/favorites.db';
const shortcutsStoragePath = userDataPath + '/shortcuts.db';

global.db.favorites = new Datastore({ filename: favoritesStoragePath, autoload: true });
global.db.shortcuts = new Datastore({ filename: shortcutsStoragePath, autoload: true });
// some random useful notes
// https://github.com/electron/electron/blob/master/docs/api/app.md#appgetpathname
// https://medium.com/cameron-nokes/how-to-store-user-data-in-electron-3ba6bf66bc1e

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "EOS Desktop"});

  mainWindow.setFullScreen(true);

  // and load the index.html of the app.
  const fileLocation = url.format({
    // TODO move dist folder to electron/resources folder
    pathname:path.join(__dirname, 'dist', 'index.html'),
    protocol:'file:'
  });

  mainWindow.loadURL(fileLocation);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('get-all-backgrounds', (event, arg) => {
  fs.readdir(path.join(__dirname, 'dist', 'assets', 'images', 'backgrounds'), (err, files) => {
    event.sender.send('get-all-backgrounds', files);
  });
});

ipc.on('favorite-icon-crud', async (event, arg) => {
  let result;

  switch(arg.action) {
    case 'create':
      result = await favoritesApi.createFavoriteIcon(arg);
      break;
    case 'read':
      result = await favoritesApi.readAllFavoriteIcons(arg);
      break;
    case 'update':
      result = await favoritesApi.updateFavoriteIcon(arg);
      break;
    case 'delete':
      result = await favoritesApi.deleteFavoriteIcon(arg);
      break;
  }

  // return result of request
  event.sender.send('favorite-icon-crud', result);

});


// ipc.on('shortcut-icon-crud', async (event, arg) => {
//   switch(arg.action) {
//     case 'create':
//       // favoritesApi.createFavoriteIcon(arg);
//       break;
//     case 'read':
//       // favoritesApi.readAllFavoriteIcons(arg);
//       break;
//     case 'update':
//       // favoritesApi.updateFavoriteIcon(arg);
//       break;
//     case 'delete':
//       // favoritesApi.deleteFavoriteIcon(arg);
//       break;
//   }
// });
