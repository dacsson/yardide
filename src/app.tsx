import { createRoot } from 'react-dom/client';
import { Main } from './components/Main/Main'
import { Sidebar } from './components/Sidebar/Sidebar';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className='app' id='m_app'>
    <Sidebar />
    <Main />
  </div>
);