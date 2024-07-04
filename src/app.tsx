import { useState } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Main } from './components/Main/Main'
import { CreateModal } from './components/Modal/CreateModal';
import { Sidebar } from './components/Sidebar/Sidebar';
import { YrdContext } from './components/Context/YrdContext';
import { IPreview, IYardFile } from './@types/types';

const Index = () => {
  const [yardFile, setYardFile] = useState<IYardFile | null>(null);
  const [previewFile, setPreviewFile] = useState<IPreview | null>(null);
  const [currPath, setCurrPath] = useState<string>("");

  const [textInput, setTextInput] = useState<string>("")
  const [numberOfLines, setNumberOfLines] = useState<number>(2);
  const [fileOpened, setFileOpened] = useState<boolean>(false);
  const [filePath, setFilePath] = useState<string>("");

  const getTextareaNumberOfLines = (textarea : HTMLTextAreaElement) => {
    var previous_height = textarea.style.height, lines
    textarea.style.height = '0px'
    lines = textarea.scrollHeight/parseInt(getComputedStyle(textarea).lineHeight)
    textarea.style.height = previous_height
    return Math.ceil(lines)
  }

  const handleOpenFile = (newText : string, path : string) => {
    var textArea : HTMLTextAreaElement = document.getElementById('edit-area');
    setTextInput(newText);
    setNumberOfLines(getTextareaNumberOfLines(textArea));
    setFilePath(path);
    setCurrPath(path.substring(0,path.lastIndexOf("/")))
    console.log(" number of lines ", numberOfLines)
  }

  return (
    <YrdContext.Provider value={{ yardFile, setYardFile, previewFile, setPreviewFile, currPath, setCurrPath, fileOpened, setFileOpened,  handleOpenFile, textInput, setTextInput, numberOfLines, setNumberOfLines, filePath, setFilePath}}>
      <div className='app' id='m_app'>
        {/* {
          openCreateModal
          &&
          <CreateModal setOpenCreateModal={setOpenCreateModal}/>
        } */}
        <Sidebar/>
        <Main/>
      </div>
    </YrdContext.Provider>
  )
};

render(<Index />, document.getElementById('root'));
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <div className='app' id='m_app'>
//     <Sidebar />
//     <Main />
//   </div>
// );