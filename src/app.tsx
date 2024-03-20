import { createRoot } from 'react-dom/client';
import { Editor } from './components/Main/Editor'
import { Sidebar } from './components/Sidebar/Sidebar';

const root = createRoot(document.body);
root.render(
  <div className='app'>
    <Sidebar />
    <Editor />
  </div>
);