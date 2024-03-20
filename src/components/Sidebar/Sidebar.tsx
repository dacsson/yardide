import './style.css'
import { FaFileAlt } from "react-icons/fa";

export const Sidebar = () =>
{
  return(
    <div className='s_container'>
      <div className='s_profile'>
        <div className='s_logo' />
        <div className='s_uinfo'>
          <h3>Артём Сафонов</h3>
          <a>sda20036@gmail.com</a>
        </div>
      </div>
      <div className='s_section'>
        <h3>ЗАКЛАДКИ</h3>
        <div className='s_list'>
          <button className='s_item'>
            <FaFileAlt color='#a4a09f'/>
            <a>Лаборторная работа №1</a>
          </button>
          <button className='s_item'>
            <FaFileAlt color='#a4a09f'/>
            <a>Просто черновик</a>
          </button>
      </div>
      </div>
    </div>
  )
}