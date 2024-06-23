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

  return (
    <YrdContext.Provider value={{ yardFile, setYardFile, previewFile, setPreviewFile, currPath, setCurrPath }}>
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