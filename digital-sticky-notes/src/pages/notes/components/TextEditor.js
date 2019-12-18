import React, {useState} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'

//import draft-js-custom-styles
import createStyles from 'draft-js-custom-styles'

import EditorToolbar from './EditorToolbar'

//use the 'font-size' CSS property with #styles, and #customStyleFn
const {styles, customStyleFn} = createStyles(['font-size', 'font-weight', 'font-style'])

const TextEditor = (props) => {
	const { note } = props;
  	const [editorState, setEditorState] = useState(EditorState.createEmpty());


	return (
		<div className='text-editor'>
			
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
			/>
		</div>
	);
}

export default TextEditor;