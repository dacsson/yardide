import { FaRegCircleDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { FaRegFloppyDisk } from "react-icons/fa6";

interface IFileListProps
{
  fileName: string;
  setFileOpened: Function;
  setFilePath: Function;
  fileOpened: Boolean;
  handleSaveFile: Function;
  handleOpenFile: Function;
}

export const FileList = ({fileName, setFileOpened, setFilePath, fileOpened, handleSaveFile, handleOpenFile} : IFileListProps) =>
{
  const handleCloseFile = () =>
  {
    setFileOpened(false);
    setFilePath("");
    fileName = "";
  }

  return(
    <div className="m_file">
      {
        fileName.length > 0
        ?
        <div className="m_file_info">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaRegCircleDot size={"13px"} style={{ color: "#99999" }}/>
            <a>{fileName.replace(/^.*[\\/]/, '')}</a>
          </div>
          <div className="m_file_bgroup">
            <button onClick={() => {}}>
              <FaRegFloppyDisk size={"16px"}/>
            </button>
            <button onClick={() => handleCloseFile()}>
              <FaCircleXmark size={"16px"}/>
            </button>
          </div>
        </div>
        :
        <>
          {
            fileOpened
            &&
            <div className="m_file_info">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaRegCircleDot size={"13px"} style={{ color: "#99999" }}/>
                <a>Несохранённый файл</a>
              </div>
              <div className="m_file_bgroup">
                <button onClick={() => handleSaveFile()}>
                  <FaRegFloppyDisk size={"16px"}/>
                </button>
                <button onClick={() => handleCloseFile()}>
                  <FaCircleXmark size={"16px"}/>
                </button>
              </div>
            </div>
          }
        </>
      }
    </div>
  )
}