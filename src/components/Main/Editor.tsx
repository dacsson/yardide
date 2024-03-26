import React, { useState } from 'react'
import './style.css'

export const Editor = () => {
  const [textInput, setTextInput] = useState<string>("\n")
  const [numberOfLines, setNumberOfLine] = useState<number>(2)

  // calculate number of enters or \n's in users input in a file
  const getTextareaNumberOfLines = (textarea : HTMLTextAreaElement) => {
    var previous_height = textarea.style.height, lines
    textarea.style.height = '0px'
    lines = textarea.scrollHeight/parseInt(getComputedStyle(textarea).lineHeight)
    textarea.style.height = previous_height
    return Math.ceil(lines)
  }

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value)
    setNumberOfLine(getTextareaNumberOfLines(e.target))
    console.log('\tn ', numberOfLines, " - ", getTextareaNumberOfLines(e.target))
  }

  return(
		<div className='m_editor'>
			<div className='m_lines'>
				{
          [...Array(numberOfLines-1)].map((x, i) =>
            <a key={i}>{i+1}</a>
          )
        }
			</div>
			<textarea autoFocus={true} autoCorrect='off' spellCheck={false} onChange={(e) => handleTextInput(e)} />
		</div>
	)
}