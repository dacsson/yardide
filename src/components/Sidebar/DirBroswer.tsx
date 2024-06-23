import { FaFolderClosed } from "react-icons/fa6";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { useEffect, useState } from 'react'
import { NoDir } from './NoDir'
import './style.css'

interface IDirBrowserProps
{
  path: string,
  setFiles: Function,
  files: string[]
}

export const DirBrowser = ({path, setFiles, files} : IDirBrowserProps) => 
{
  const [localFiles, setLocalFiles] = useState<Array<string>>(files);

  // const handleGetFile = (path: string) => {
  //   // ipcRenderer.send()
  //   try {
  //     window.electronAPI.request("readPickedFile", path);
  //   }
  //   finally {
  //     window.electronAPI.response("yardText", (data) => {
  //       // window.document.getElementById('info').innerText = data
  //       var _data = new TextDecoder().decode(data.content);
  //       // console.log("yard data file: ", data)
  //       setFileOpened(true);
  //       handleOpenFile(_data, data.path);
  //     });
  //   }
  // }

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    // console.log("curr path", path.length, " files ", files)
    if(path.length > 0)
    {
      try {
        window.electronAPI.request("readDir", path);
      }
      finally {
        window.electronAPI.response("dirFiles", (data) => {
          // console.log("dir files: ", data)
          setFiles(data);
          setLocalFiles(data);
        });
      }
    }
  }, [])

  const handleFileIcon = (extension: string) => {
    switch (extension) {
      case "html":
        return <AiOutlineFile size={'18px'} className='s_button_ddir'/>
        break;
      case "pdf":
        return <AiOutlineFilePdf size={'18px'} className='s_button_ddir'/>
        break;
      case "yard":
        return <AiOutlineFileText size={'18px'} className='s_button_ddir'/>
        break;
      default:
        return <AiOutlineFile size={'18px'} className='s_button_ddir'/>
        break;
    }
  }

  return(
    <div className='s_browser'>
      {
        path.length > 0
        ?
        <div>
          <button id='openBtn'>
            <FaFolderClosed size={'20px'} className='s_button_icon' style={{ color: '#61b5db' }}/>
            {/* <a style={{ width: '20px' }} className='s_button_icon'>🗀</a> */}
            <a style={{ color: '#fff' }}>{path.replace(/^.*[\\/]/, '')}</a>
          </button>
          {
            localFiles.map((name, index) => {
              return( 
                <button key={index}>
                  { handleFileIcon(name.split('.').pop()) }
                  <a>{name}</a>
                </button> 
              )
            })
          }
        </div>
        :
        <NoDir />
      }
    </div>
  )
}