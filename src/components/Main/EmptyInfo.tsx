import { useEffect } from "react";
import { FaFolder } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
// import { ipcRenderer } from "electron/renderer";
import './style.css'

interface IEmptyInfoProps {
  setFileOpened : Function,
  handleOpenFile : Function,
  setOpenCreateModal : Function
}

export const EmptyInfo = ({setFileOpened, handleOpenFile, setOpenCreateModal} : IEmptyInfoProps) =>
{
  const handleCreateFile = () => {
    setFileOpened(true);
    // handleOpenFile("Новый файл", "/Несохранённый файл")
  }

  const handleGetFile = () => {
    // ipcRenderer.send()
    window.electronAPI.request("readYardFile", "some data");
  }

  useEffect(() => {
    window.electronAPI.response("yardText", (data) => {
      // window.document.getElementById('info').innerText = data
      var _data = new TextDecoder().decode(data.content);
      console.log("yard data file: ", data)
      setFileOpened(true);
      handleOpenFile(_data, data.path);
    });
  }, [])

  return(
    <div className='m_empty_info'>
      <h3>Добро пожаловать в среду разработки <a style={{ fontFamily: "JB", fontWeight: 'bold' }}>ЯРД</a></h3>
      <a>Чтобы приступить к работе создайте или откройте файл</a>
      <div style={{ display: 'flex'}}>
        <button onClick={(e) => handleCreateFile()} id='createNewFile'>
          Создать
        </button>
        <button onClick={(e) => handleGetFile()} id='openSingleFile' style={{ marginLeft: '10px' }}>
          Открыть 
        </button>
      </div>
    </div>
  )
}