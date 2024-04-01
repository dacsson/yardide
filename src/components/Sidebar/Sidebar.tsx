import { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaFont } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";
import { DirBrowser } from "./DirBroswer";
import { NoDir } from "./NoDir";

import './style.css'

interface ISidebarProps {
  path: string
}

export const Sidebar = ({path} : ISidebarProps) =>
{
  const [dirsOpen, setDirsOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [newDocOpen, setNewDocOpen] = useState<boolean>(false);
  const [errorsOpen, setErrorsOpen] = useState<boolean>(false);
  const [elementsOpen, setElementsOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<Array<string>>([]);

  const handleOpenGroup = (index: number) => {
    switch (index) {
      case 1:
        {
          setDirsOpen(true);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(false);
          setErrorsOpen(false);
          setElementsOpen(false);

          break;
        }
      case 2:
        {
          setDirsOpen(false);
          setSearchOpen(true);
          setSettingsOpen(false);
          setNewDocOpen(false);
          setErrorsOpen(false);
          setElementsOpen(false);
          break;
        }
      case 3:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(true);
          setNewDocOpen(false);
          setErrorsOpen(false);
          setElementsOpen(false);
          break;
        }
      case 4:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(true);
          setErrorsOpen(false);
          setElementsOpen(false);

          // open modal
          break;
        }
      case 5:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(false);
          setErrorsOpen(true);
          setElementsOpen(false);
          break;
        }
      case 6:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(false);
          setErrorsOpen(false);
          setElementsOpen(true);
          break;
        }
    }
  }

  return(
    <div className='s_container'>
      <div className='s_nav'>
        <div className='s_button_group'>
          <button className='close' onClick={() => window.close()}/>
          <button className='minimize' />
          <button className='maximize' />
        </div>
      </div>
      <div className='s_menu'>
        <div className='s_button_group'>
          <button 
            id='openDir' 
            onClick={() => handleOpenGroup(1)} 
            style={{ color: dirsOpen ? '#fff': '#232324', backgroundColor: dirsOpen ? "#0077ff" : "transparent"}}
          >
            <FaFolder size={'17px'}/>
          </button>
          <button 
            id='openElements'
            onClick={() => handleOpenGroup(6)} 
            style={{ color: elementsOpen ? '#fff' : '#232324', backgroundColor: elementsOpen  ? "#0077ff" : "transparent"}}
          >
            <FaFont size={'17px'}/>
          </button>
          <button 
            id='openSearch'
            onClick={() => handleOpenGroup(2)} 
            style={{ color: searchOpen ? '#fff' : '#232324', backgroundColor: searchOpen ? "#0077ff" : "transparent"}}
          >
            <FaMagnifyingGlass size={'17px'}/>
          </button>
          <button 
            id='openSettings'
            onClick={() => handleOpenGroup(3)} 
            style={{ color: settingsOpen ? '#fff': '#232324', backgroundColor: settingsOpen ? "#0077ff" : "transparent"}}
          >
            <FaGear size={'17px'}/></button>
          <button 
            id='openErrors'
            onClick={() => handleOpenGroup(5)} 
            style={{ color: errorsOpen ? '#fff' : '#232324', backgroundColor: errorsOpen ? "#0077ff" : "transparent"}}
          >
            <FaTriangleExclamation size={'17px'}/>
          </button>
          <button 
            id='openDoc'
            onClick={() => handleOpenGroup(4)} 
            style={{ color: newDocOpen ? '#fff' : '#232324', backgroundColor: newDocOpen ? "#0077ff" : "transparent"}}
          >
            <FaSquarePlus size={'17px'}/>
          </button>
        </div>
      </div>
      {/* <div className="s_status_bar">
        <div className="s_status_field">
          <a>Слов</a>
          <a>5</a>
        </div>
        <div className="s_status_field">
          <a>Файлов</a>
          <a>1</a>
        </div>
      </div> */}
      {
        dirsOpen
        &&
        <DirBrowser path={path} setFiles={setFiles} files={files}/>
      }
    </div>
  )
}