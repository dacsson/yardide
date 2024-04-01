import { FcOpenedFolder } from "react-icons/fc";
import { FaHtml5 } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
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
        return <FaHtml5 size={'18px'} className='s_button_ddir'/>
        break;
      case "pdf":
        return <FaFilePdf size={'18px'} className='s_button_ddir'/>
        break;
      case "yard":
        return <FaFileLines size={'18px'} className='s_button_ddir'/>
        break;
      default:
        return <FaFile size={'18px'} className='s_button_ddir'/>
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
            <FcOpenedFolder size={'20px'} className='s_button_icon' style={{ color: '#fff' }}/>
            <a style={{ color: '#fff' }}>{path.replace(/^.*[\\/]/, '')}</a>
          </button>
          {
            localFiles.map((name, index) => {
              return( 
                <button key={index}>
                  { handleFileIcon(name.split('.').pop()) }
                  <a style={{ fontWeight: 'normal' }}>{name}</a>
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