import { useState } from "react";
import { FaFolder } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";

import './style.css'

interface ISidebarProps {
  dirName: string,
  files: string[]
}

export const Sidebar = ({dirName, files} : ISidebarProps) =>
{
  const [dirsOpen, setDirsOpen] = useState<boolean>(true);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [newDocOpen, setNewDocOpen] = useState<boolean>(false);

  const handleOpenGroup = (index: number) => {
    switch (index) {
      case 1:
        {
          setDirsOpen(true);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(false);
          break;
        }
      case 2:
        {
          setDirsOpen(false);
          setSearchOpen(true);
          setSettingsOpen(false);
          setNewDocOpen(false);
          break;
        }
      case 3:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(true);
          setNewDocOpen(false);
          break;
        }
      case 4:
        {
          setDirsOpen(false);
          setSearchOpen(false);
          setSettingsOpen(false);
          setNewDocOpen(true);
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
            style={{ color: dirsOpen ? '#00bcd4': '#d6d6d6'}}
          >
            <FaFolder size={'18px'}/>
          </button>
          <button 
            id='openSearch'
            onClick={() => handleOpenGroup(2)} 
            style={{ color: searchOpen ? '#00bcd4' : '#d6d6d6'}}
          >
            <FaMagnifyingGlass size={'18px'}/>
          </button>
          <button 
            id='openSettings'
            onClick={() => handleOpenGroup(3)} 
            style={{ color: settingsOpen ? '#00bcd4': '#d6d6d6'}}
          >
            <FaGear size={'18px'}/></button>
          <button 
            id='openDoc'
            onClick={() => handleOpenGroup(4)} 
            style={{ color: newDocOpen ? '#00bcd4' : '#d6d6d6'}}
          >
            <FaSquarePlus size={'18px'}/>
          </button>
        </div>
      </div>
      {
        dirsOpen
        &&
        <div className='s_browser'>
          <button id='openBtn'>
            <FaRegFolderOpen size={'18px'} className='s_button_icon' style={{ color: '#fff' }}/>
            <a style={{ color: '#fff' }}>{dirName}</a>
          </button>
          {
            files.map((name, index) => {
              <button key={index}>
                <FaAngleRight size={'16px'} className='s_button_icon' style={{ fontWeight: 'lighter' }}/>
                <FaFolder size={'18px'} className='s_button_ddir'/>
                <a>{name}</a>
              </button>
            })
          }
        </div>
      }
    </div>
  )
}