import { Editor } from './Editor'
import { Preview } from './Preview'
import { StatusBar } from './StatusBar'
import './style.css'
import { Tabs } from './Tabs'

export const Main = () =>
{
  return(
    <div className='m_container'>
      <Tabs />
      <div className='m_main'>
        <Editor />
        <Preview />
      </div>
      <StatusBar />
    </div>
  )
}