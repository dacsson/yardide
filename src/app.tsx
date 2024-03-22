import { createRoot } from 'react-dom/client';
import { Main } from './components/Main/Main'
import { Sidebar } from './components/Sidebar/Sidebar';

const root = createRoot(document.body);
root.render(
  <div className='app'>
    <Sidebar />
    <Main />
  </div>
);