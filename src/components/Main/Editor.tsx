import React, { useEffect, useState } from 'react'
import { EmptyInfo } from './EmptyInfo'
import { FileList } from './FileList'
import { RichTextarea, createRegexRenderer } from "rich-textarea";
import './style.css'

interface IEditorProps
{
  setDirName: Function,
  setOpenCreateModal: Function
}

export const Editor = ({setDirName, setOpenCreateModal} : IEditorProps) => {
  const [textInput, setTextInput] = useState<string>("")
  const [numberOfLines, setNumberOfLine] = useState<number>(2);
  const [fileOpened, setFileOpened] = useState<boolean>(false);
  const [filePath, setFilePath] = useState<string>("");

  // calculate number of enters or \n's in users input in a file
  const getTextareaNumberOfLines = (textarea : HTMLTextAreaElement) => {
    var previous_height = textarea.style.height, lines
    textarea.style.height = '0px'
    lines = textarea.scrollHeight/parseInt(getComputedStyle(textarea).lineHeight)
    textarea.style.height = previous_height
    return Math.ceil(lines)
  }

  const handleTextInput = () => {
    var textArea : HTMLTextAreaElement = document.getElementById('edit-area');
    setTextInput(textArea.value)
    setNumberOfLine(getTextareaNumberOfLines(textArea))
  }

  const handleOpenFile = (newText : string, path : string) => {
    var textArea : HTMLTextAreaElement = document.getElementById('edit-area');
    setTextInput(newText);
    setNumberOfLine(getTextareaNumberOfLines(textArea));
    setFilePath(path);
    setDirName(path.substring(0,path.lastIndexOf("/")))
  }

  const renderer = createRegexRenderer([
    [/![\wа-я]+/g, { color: '#0077ff' }],
    [/\\[\wа-я]+/g, { color: '#33c748' }]
  ]);

  const handlePreviewFile = () =>
  {
    try {
      var textArea : HTMLTextAreaElement = document.getElementById('edit-area');
      window.electronAPI.request("readFile", [filePath, textArea.value]);
    }
    finally {
      window.electronAPI.response("fileText", (data) => {
        var _data = new TextDecoder().decode(data);
        var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
        previewBox.contentWindow.document.close();
        previewBox.contentWindow.document.open();
        previewBox.contentWindow.document.write(_data);
        // console.log("from file: ", _data)
      })
    }
  }

  const handleSaveFile = () => {
    try {
      window.electronAPI.request("saveNewFile", [textInput, filePath]);
    }
    finally {
      window.electronAPI.response("newFilePath", (data) => {
        // window.document.getElementById('info').innerText = data
        // var _data = new TextDecoder().decode(data);
        // console.log("data file: ", data)
        setFileOpened(true);
        handleOpenFile(textInput, data);
      });
    }
  }

  useEffect(() => {
    if(textInput.length > 0)
    {
      try {
        window.electronAPI.request("readFile", [filePath, textInput]);
      }
      finally {
        window.electronAPI.response("fileText", (data) => {
          var _data = new TextDecoder().decode(data);
          var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
          previewBox.contentWindow.document.close();
          previewBox.contentWindow.document.open();
          previewBox.contentWindow.document.write(_data);
          // console.log("from file: ", _data)
        })
      }
    }
  }, [])

  return(
    <div className='m_file_area'>
      <FileList 
        fileName={filePath} 
        setFileOpened={setFileOpened} 
        setFilePath={setFilePath} 
        fileOpened={fileOpened} 
        handleSaveFile={handleSaveFile}
        handleOpenFile={handleOpenFile}
        handlePreviewFile={handlePreviewFile}
      />
      {
        fileOpened
        ?
        <div className='m_editor'>
          <div className='m_lines'>
            {
              [...Array(numberOfLines-1)].map((x, i) =>
                <a key={i}>{i+1}</a>
              )
            }
          </div>
          {/* <textarea 
            id="edit-area" 
            autoFocus={true} 
            spellCheck={false} 
            value={textInput} 
            onChange={() => handleTextInput()}
          /> */}
          <RichTextarea
            className='code_area'
            id='edit-area'
            value={textInput}
            onChange={() => handleTextInput()}
            style={{ height: '100%', minWidth: '700px'}}
          >
            {renderer}
          </RichTextarea>
        </div>
        :
        <EmptyInfo setFileOpened={setFileOpened} handleOpenFile={handleOpenFile} setOpenCreateModal={setOpenCreateModal}/>
      }
    </div>
	)
}