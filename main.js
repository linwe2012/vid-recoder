'use strict';
const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;


app.on('ready', function(){
    mainWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.on('closed', function(){
        app.quit();
    });
    
    mainWindow.loadURL(`file://${__dirname}/dist/VRecoder/index.html`)

    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);
    // titlebar.updateMenu(mainMenuTemplate);
});



const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Open',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q'
            },
            {
                label: 'Open Folder'
            }

        ]
    },
    {
        label: 'DevTools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+Shift+I' : 'Ctrl+Shift+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    }
];



if(process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}