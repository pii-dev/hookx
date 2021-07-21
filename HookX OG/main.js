const { remote } = require('electron');
const { BrowserWindow, app } = require('electron')
const path = require('path')

function createWindow () {
	
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    frame: false,
  icon: __dirname+'/img/icon.png',
    webPreferences: {
     preload: path.join(__dirname, 'preload.js'),
     nodeIntegration: true
	}
  })
  mainWindow.loadFile('index.html')
    mainWindow.on('closed', function () {
    mainWindow = null

    })
}




app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})