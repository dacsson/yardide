import { useState } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Main } from './components/Main/Main'
import { CreateModal } from './components/Modal/CreateModal';
import { Sidebar } from './components/Sidebar/Sidebar';

const Index = () => {
  const [dirName, setDirName] = useState<string>("");
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  return (
    <div className='app' id='m_app'>
      {/* {
        openCreateModal
        &&
        <CreateModal setOpenCreateModal={setOpenCreateModal}/>
      } */}
      <Sidebar path={dirName}/>
      <Main setDirName={setDirName} setOpenCreateModal={setOpenCreateModal}/>
    </div>
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