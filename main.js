const { app, BrowserWindow, globalShortcut } = require('electron');
const port = 3000;
let win;
let devToolsIsOpened = false;




function createWindow() {
    win = new BrowserWindow({
        minHeight: 800,
        minWidth: 800,
        alwaysOnTop: true,
        center: true,
        titleBarStyle: 'customButtonsOnHover',
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('./index.html');
    // win.loadURL(`http://localhost:${port}/`);
}

app.whenReady()
.then(createWindow)
.then(() => {
    globalShortcut.register('F12', () => {
        if(devToolsIsOpened === false) {
            devToolsIsOpened = true;
            return win.webContents.openDevTools()
        };
        devToolsIsOpened = false;
        win.webContents.closeDevTools();
    });
});

app
.on('window-all-closed', () => {if(process.platform !== 'darwin') app.quit()})
.on('activate', () => {if(BrowserWindow.getAllWindows().length === 0) createWindow()});
