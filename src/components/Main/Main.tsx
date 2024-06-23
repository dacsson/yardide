import { Editor } from './Editor'
import { Preview } from './Preview' 
import { Tabs } from './Tabs'
import { FileList } from './FileList'
import './style.css'
import { useContext, useState } from 'react'
import { YrdContext } from '../Context/YrdContext'
import { YrdContextType } from '../../@types/types'

export const Main = () =>
{
  // const [fileInput, setFileInput]
  const [isFileOpened, setIsFileOpened] = useState<boolean>(false);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  
  const context = useContext<YrdContextType>(YrdContext);

  return(
    <div className='m_container'>
      <Tabs />
      <div className='m_main'>
        <Editor setDirName={context.setCurrPath} setOpenCreateModal={setOpenCreateModal}/>
        <Preview/>
      </div>
    </div>
  )
}