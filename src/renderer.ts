import './index.css';
import './app.tsx';

window.addEventListener("DOMContentLoaded", (event) => {
  // window.document.getElementById('openDir').addEventListener('click', () => {
  //   window.electronAPI.response("fromMain", (data) => {
  //     // window.document.getElementById('info').innerText = data
  //     console.log("got: ", data)
  //   });
  //   window.electronAPI.request("toMain", "some data");
  // })

  // var editArea = window.document.getElementById('edit-area');
  // if(editArea) {
  //   editArea.addEventListener('input', () => {
  //     window.electronAPI.response("fileText", (data) => {
  //       var _data = new TextDecoder().decode(data);
  //       var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
  //       previewBox.contentWindow.document.close();
  //       previewBox.contentWindow.document.open();
  //       previewBox.contentWindow.document.write(_data);
  //       console.log("from file: ", _data)
  //     })
  //     window.electronAPI.request("readFile", "preview");
  //   })
  // }

  // window.document.getElementById('openSingleFile').addEventListener('click', () => {
  //   console.log("clicked y")
  //   window.electronAPI.response("yardText", (data) => {
  //     // window.document.getElementById('info').innerText = data
  //     var _data = new TextDecoder().decode(data);
  //     console.log("yard data file: ", _data)
  //   });
  //   window.electronAPI.request("readYardFile", "some data");
  // })
})