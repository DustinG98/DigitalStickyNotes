import React, {useState, useEffect} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js'

//import draft-js-custom-styles
import createStyles from 'draft-js-custom-styles'

import EditorToolbar from './EditorToolbar'

//use the 'font-size' CSS property with #styles, and #customStyleFn
const {styles, customStyleFn} = createStyles(['font-size', 'font-weight', 'font-style'])


const TextEditor = (props) => {
	const { note } = props;

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
		<div className='text-editor'>
			{console.log(initialData)}
			<button onClick={() => setReadOnly(!readOnly)}>Edit</button>
			<button onClick={() => saveData()}>Save</button>
			<EditorToolbar
				editorState={editorState}
				setEditorState={setEditorState}

				//pass styles as prop
				styles={styles}
			/>
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
	);
}

export default TextEditor;