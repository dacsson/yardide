import './style.css'

export const Editor = () => {
  return(
		<div className='m_editor'>
			<div className='m_lines'>
				<a>1</a>
				<a>2</a>
				<a>3</a>
				<a>4</a>
			</div>
			<textarea autoCorrect='off' spellCheck={false}/>
		</div>
	)
}