import React, {useState, useEffect} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import './texteditor.scss'

//import draft-js-custom-styles
import createStyles from 'draft-js-custom-styles'

import EditorToolbar from './EditorToolbar'

//use the 'font-size' CSS property with #styles, and #customStyleFn
const {styles, customStyleFn} = createStyles(['font-size', 'font-weight', 'font-style'])


const TextEditor = (props) => {
	const { note, close } = props;

	let initialData = JSON.parse(localStorage.getItem(`content${note._id}`))


	const [editorState, setEditorState] = useState(EditorState.createEmpty());


	useEffect(() => {
		let initialData = JSON.parse(localStorage.getItem(`content${note._id}`))
		if(initialData === null) {
			setEditorState(EditorState.createEmpty())
		} else {
			setEditorState(EditorState.createWithContent(convertFromRaw(initialData)))
		}
	}, [note._id])

	
	  const saveData = () => {
		let content = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
		console.log(content)
		localStorage.setItem(`content${note._id}`, content)
	  }

	  const closePopup = () => {
		  saveData();
		  close();
	  }
	return (
		<div className="editCont">
			<div className='text-editor' style={{ height: '80vh', overflowY: 'auto' }}>
				<div style={{  width: '100%', padding: '5%' }}>
					<Editor
						editorState={editorState}
						onChange={setEditorState}
						//pass customStyleFn as prop
						placeholder={'Start typing under here...'}
						customStyleFn={customStyleFn}
					/>
				</div>
			</div>
				<div className="toolbar">
				
					<EditorToolbar
						editorState={editorState}
						setEditorState={setEditorState}
						readOnly={false}
						saveData={saveData}
						//pass styles as prop
						styles={styles}
					/>
				</div>
		</div>
	);
}

export default TextEditor;