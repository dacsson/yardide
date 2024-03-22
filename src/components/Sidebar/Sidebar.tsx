import './style.css'
import { FaFileAlt } from "react-icons/fa";

export const Sidebar = () =>
{
  return(
    <div className='s_container'>
      <div className='s_nav'>
        <div className='s_button_group'>
          <button className='close' onClick={() => window.close()}/>
          <button className='minimize' />
          <button className='maximize' />
        </div>
      </div>
      <div className='s_menu'></div>
      <div className='s_browser'></div>
    </div>
  )
}