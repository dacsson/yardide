import React, { useContext, useEffect, useState } from 'react'
import { EmptyInfo } from './EmptyInfo'
import { FileList } from './FileList'
import { RichTextarea, createRegexRenderer } from "rich-textarea";
import { YrdContext } from '../Context/YrdContext'
import { YrdContextType } from '../../@types/types'
import './style.css'

interface IEditorProps
{
  setDirName: Function,
  setOpenCreateModal: Function
}

export const Editor = ({setDirName, setOpenCreateModal} : IEditorProps) => {

  const context = useContext<YrdContextType>(YrdContext);

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
    context.setTextInput(textArea.value)
    context.setNumberOfLines(getTextareaNumberOfLines(textArea))
  }

  const renderer = createRegexRenderer([
    [/![\wа-я]+/g, { color: '#0077ff' }],
    [/\\[\wа-я]+/g, { color: '#33c748' }]
  ]);

  const handlePreviewFile = () =>
  {
    try {
      var textArea : HTMLTextAreaElement = document.getElementById('edit-area');
      window.electronAPI.request("readFile", [context.filePath, textArea.value]);
    }
    finally {
      // window.electronAPI.response("compOut", (data) => {
      //   var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
      //   previewBox.innerText = data;    
      // })
      window.electronAPI.response("fileText", (data) => {
        // var _data = new TextDecoder().decode(data);
        var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
        previewBox.src = "file:///" + data;
        // console.log("from file: ", _data)
      })
    }
  }

  const handleSaveFile = () => {
    try {
      window.electronAPI.request("saveNewFile", [context.textInput, context.filePath]);
    }
    finally {
      window.electronAPI.response("newFilePath", (data) => {
        // window.document.getElementById('info').innerText = data
        // var _data = new TextDecoder().decode(data);
        // console.log("data file: ", data)
        context.setFileOpened(true);
        context.handleOpenFile(context.textInput, data);
      });
    }
  }

  useEffect(() => {
    // if(context.textInput.length > 0)
    // {
    //   try {
    //     window.electronAPI.request("readFile", [context.filePath, context.textInput]);
    //   }
    //   finally {
    //     window.electronAPI.response("fileText", (data) => {
    //       // var _data = new TextDecoder().decode(data);
    //       var previewBox : HTMLIFrameElement = document.getElementById('preview-box');
    //       previewBox.src = "file:///" + data;
    //       // console.log("from file: ", _data)
    //     })
    //   }
    // }
  }, [])

  return(
    <div className='m_file_area'>
      <FileList 
        fileName={context.filePath} 
        setFileOpened={context.setFileOpened} 
        setFilePath={context.setFilePath} 
        fileOpened={context.fileOpened} 
        handleSaveFile={handleSaveFile}
        handleOpenFile={context.handleOpenFile}
        handlePreviewFile={handlePreviewFile}
      />
      {
        context.fileOpened
        ?
        <div className='m_editor'>
          <div className='m_lines'>
            {
              [...Array(context.numberOfLines-1)].map((x, i) =>
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
            value={context.textInput}
            onChange={() => handleTextInput()}
            style={{ height: '100%', minWidth: '700px'}}
          >
            {renderer}
          </RichTextarea>
        </div>
        :
        <EmptyInfo setFileOpened={context.setFileOpened} handleOpenFile={context.handleOpenFile} setOpenCreateModal={setOpenCreateModal}/>
      }
    </div>
	)
}