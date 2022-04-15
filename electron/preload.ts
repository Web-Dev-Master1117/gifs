import type {IpcRenderer} from 'electron';
import {ipcRenderer} from 'electron';
import process from 'process';

declare global {
    // eslint-disable-next-line no-inner-declarations,no-var,vars-on-top
    var ipcRenderer: IpcRenderer;
}

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
    global.ipcRenderer = ipcRenderer;
});
