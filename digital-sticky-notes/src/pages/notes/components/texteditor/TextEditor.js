import React, {useState, useEffect} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js'

//import draft-js-custom-styles
import createStyles from 'draft-js-custom-styles'

import EditorToolbar from './EditorToolbar'

//use the 'font-size' CSS property with #styles, and #customStyleFn
const {styles, customStyleFn} = createStyles(['font-size', 'font-weight', 'font-style'])


const TextEditor = (props) => {
	const { note, close } = props;

	let initialData = JSON.parse(localStorage.getItem(`content${note.id}`))


	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [readOnly, setReadOnly] = useState(true)


	useEffect(() => {
		let initialData = JSON.parse(localStorage.getItem(`content${note.id}`))
		if(initialData === null) {
			setEditorState(EditorState.createEmpty())
		} else {
			setEditorState(EditorState.createWithContent(convertFromRaw(initialData)))
		}
	}, [note.id])

	
	  const saveData = () => {
		let content = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
		localStorage.setItem(`content${note.id}`, content)
	  }
	return (
		<div className='text-editor' style={{ height: '80vh', overflowY: 'auto' }}>
			{console.log(initialData)}
			
			<button className="close" style={{ zIndex: '999' }} onClick={close}>&times;</button>
			<div className="toolbar" style={{ position: 'fixed', width: '49%', zIndex: '997' }}>
				{readOnly === false ? `EDIT MODE` : `READ ONLY`}
			
				<EditorToolbar
					editorState={editorState}
					setEditorState={setEditorState}
					readOnly={readOnly}
					setReadOnly={setReadOnly}
					saveData={saveData}
					//pass styles as prop
					styles={styles}
				/>
			</div>
			<div style={{ marginTop: '15%' }}>
				<h2 style={{marginTop: '3%'}}>{note.title}</h2>
				<Editor
					
					editorState={editorState}
					onChange={setEditorState}
					placeholder={'Start Typing Here...'}
					//pass customStyleFn as prop
					customStyleFn={customStyleFn}
					readOnly={readOnly}
				/>
			</div>
		</div>
	);
}

export default TextEditor;