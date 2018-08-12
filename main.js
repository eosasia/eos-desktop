// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const ScatterJS = require('scatter-js/dist/scatter.cjs');
const Eosjs = require('eosjs');
const ipc = require('electron').ipcMain;



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let scatter;
let eos;

ScatterJS.scatter
  .connect('eosdesktopio')
  .then(connected => {
    if (connected) {
      scatter = ScatterJS.scatter;
      // console.log(scatter);

      const network = {
        protocol:'http', // Defaults to https
        blockchain:'eos',
        host:null, // ( or null if endorsed chainId )
        port:null, // ( or null if defaulting to 80 )
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      };

      // Set up any extra options you want to use eosjs with.
      const eosOptions = {};

      // Get a reference to an 'Eosjs' instance with a Scatter signature provider.
      eos = scatter.eos( network, Eosjs, eosOptions, 'https' );
      eos.getBlock(1, (error, result) => {console.log(result)});
    }
  });


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "EOS Desktop",});

  mainWindow.setFullScreen(true);

  // and load the index.html of the app.
  const fileLocation = url.format({
    pathname:path.join(__dirname, 'dist', 'eos-desktop', 'index.html'),
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

ipc.on('scatter', (event, arg) => {

  if (scatter) {
    scatter.getIdentity()
      .then(identity => {
        event.sender.send('scatter', identity['name']);
      }).catch(error => {
        event.sender.send('scatter', 'Hello Stranger!');
      });

  } else {
    event.sender.send('scatter', 'Hello Stranger!');
  }

});

