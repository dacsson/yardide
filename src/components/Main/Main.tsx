import { Editor } from './Editor'
import { Preview } from './Preview' 
import { Tabs } from './Tabs'
import { FileList } from './FileList'
import './style.css'

interface IMainProps
{
  setDirName: Function,
  setOpenCreateModal: Function
}

export const Main = ({setDirName, setOpenCreateModal} : IMainProps) =>
{
  // const [fileInput, setFileInput]
  return(
    <div className='m_container'>
      <Tabs />
      <div className='m_main'>
        <Editor setDirName={setDirName} setOpenCreateModal={setOpenCreateModal}/>
        <Preview />
      </div>
    </div>
  )
}