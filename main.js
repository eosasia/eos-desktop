const os = require('os');
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const ScatterJS = require('scatter-js/dist/scatter.cjs');
const Eosjs = require('eosjs');
const ipc = require('electron').ipcMain;
const fs = require('fs');
const Datastore = require('nedb');
const WebSocket = require('ws')
global.WebSocket= WebSocket



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let scatter = null;
let eos = null;
let userIdentity = null;
const homeDir = os.homedir();
const applicationDirectory = 'Eos_Desktop';


// if application directory does not exist, create it
if (!fs.existsSync(path.join(homeDir, applicationDirectory))) {
  fs.mkdirSync(path.join(homeDir, applicationDirectory));
}


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "EOS Desktop",});

  mainWindow.setFullScreen(true);

  // and load the index.html of the app.
  const fileLocation = url.format({
    // TODO move dist folder to elctron/resources folder
    pathname:path.join(__dirname, 'dist', 'index.html'),
    protocol:'file:'
  });

  mainWindow.loadURL(fileLocation);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

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
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('get-all-backgrounds', async (event, arg) => {
  fs.readdir(path.join(__dirname, 'dist', 'assets', 'images', 'backgrounds'), (err, files) => {
    event.sender.send('get-all-backgrounds', files);
  });
});

// db = new Datastore({ filename: path.join(homeDir, applicationDirectory, 'identities'), autoload: true });


// var doc = { hello: 'world'
//     , n: 5
//     , today: new Date()
//     , nedbIsAwesome: true
//     , notthere: null
//     , notToBeSaved: undefined  // Will not be saved
//     , fruits: [ 'apple', 'orange', 'pear' ]
//     , infos: { name: 'nedb' }
// };
//
// db.insert(doc, function (err, newDoc) {   // Callback is optional
//     // newDoc is the newly inserted document, including its _id
//     // newDoc has no key called notToBeSaved since its value was undefined
// });
