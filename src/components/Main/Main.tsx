import { Editor } from './Editor'
import { StatusBar } from './StatusBar'
import './style.css'
import { Tabs } from './Tabs'

export const Main = () =>
{
  return(
    <div className='m_container'>
      <Tabs />
      <Editor />
      <StatusBar />
    </div>
  )
}