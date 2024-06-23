// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// const { contextBridge } = require('electron')

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron
//   // we can also expose variables, not just functions
// })
// window.addEventListener('click', () => {
//     // const replaceText = (selector: string, text: string) => {
//     //   const element = document.getElementById(selector)
//     //   if (element) element.innerText = text
//     // }
  
//     // for (const dependency of ['chrome', 'node', 'electron']) {
//     //   replaceText(`${dependency}-version`, process.versions[dependency])
//     // }

//     const element = document.getElementById('info')
//     if(element) element.innerText = 'Goodbye, world'

//     console.log('\n\tpreloaded\t\n')
//   })
// import { contextBridge } from 'electron'

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron
//   // we can also expose variables, not just functions
// })
const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('electronAPI', {
//   loadPreferences: () => ipcRenderer.invoke('load-prefs')
// })

contextBridge.exposeInMainWorld('electronAPI', {
  // setTitle: (title: any) => ipcRenderer.send('set-title', title)
  //send: (channel, data) => {
  request: (channel: string, data: any) => {
    // whitelist channels
    let validChannels = ["toMain", "readFile", "readYardFile", "readDir", "saveNewFile", "saveFile", "exportPdf", "readPickedFile"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
      // console.log("sending channel: ", channel)
    }
  },
  //receive: (channel, func) => {
  response: (channel: string, func : Function) => {
    let validChannels = ["fromMain", "fileText", "yardText", "dirFiles", "newFilePath"];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender` 
      ipcRenderer.on(channel, (event, ...args) => func(...args));
      // console.log("recieved data from: ", channel);
    }
  }
})