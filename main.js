const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow; // must be global

function createWindow() {
	// Create browser window
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	// Position
	mainWindow.setPosition(0,0);

	// Load index.html
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Open devtools
	//mainWindow.webContents.openDevTools();

	// Exit
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

// Electron initialised
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function() {
	// Avoid a macOS bug
	if (process.platform !== 'darwin') {
		app.quit();
	}
});


app.on('activate', function() {
	// Avoid a macOS bug
	if (mainWindow === null) {
		createWindow();
	}
});
