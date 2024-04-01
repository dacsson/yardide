import { FaCircleXmark } from "react-icons/fa6";

import './style.css'

interface ICreateModal 
{
  setOpenCreateModal: Function
}

export const CreateModal = ({setOpenCreateModal} : ICreateModal) => {
  return(
    <div id='createModal' className='mod_container'>
      <div className='mod_content'>
        <div className="header">
          <a>Новый файл</a>
          <button onClick={() => setOpenCreateModal(false)} className="close" ><FaCircleXmark size={"18px"}/></button>
        </div>

        <div className="inputters">
          <div className="field">
            <a>Название файла </a>
            <input type="text" id="fileName" />
          </div>

          <div className="field">
            <a>Шаблон файла</a>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="field">
            <a>Использовать сниппет</a>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

        </div>

        <div className="footer">
          <button className="create">Создать</button>
        </div>
      </div>
    </div>
  )
}