import {join} from 'path';
import {format} from 'url';
import type {IpcMainEvent} from 'electron';
import {BrowserWindow, app, ipcMain} from 'electron';

import isDev from 'electron-is-dev';
import prepareNext from 'electron-next';

// Prepare the renderer once the app is ready
app.on('ready', async (): Promise<void> => {
    await prepareNext('./renderer');

    const mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: false,
            preload: join(__dirname, 'preload.js'),
        },
        width: 800,
    });

    const url = isDev
        ? 'http://localhost:8000/'
        : format({
              pathname: join(__dirname, '../renderer/out/index.html'),
              protocol: 'file:',
              slashes: true,
          });

    await mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: string) => {
    // eslint-disable-next-line no-console
    console.log(message);
    setTimeout(() => {
        event.sender.send('message', 'hi from electron');
    }, 500);
});
