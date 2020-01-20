import React from 'react'

import './edittoolbar.scss'

// don't forget to declare styles in props!
const EditorToolbar = ({editorState, setEditorState, styles, readOnly, setReadOnly, saveData}) => {

    //declare state for conditional rendering of font size menu

    const setFontSize = (e, value) => {
        console.log(e)
        console.log(styles)
        //Keep cursor focus inside Editor
        e.preventDefault()

        //remove current font size at selection
        const newEditorState = styles.fontSize.remove(editorState)

        //set editorState to display new font size
        setEditorState(styles.fontSize.add(newEditorState, value))

    }
    const setBold = (e) => {
        e.preventDefault()

        const newEditorState = styles.fontWeight.remove(editorState)

        setEditorState(styles.fontWeight.add(newEditorState, 700))
    }

    const setItalic = (e) => {
        e.preventDefault()

        const newEditorState = styles.fontStyle.remove(editorState)

        setEditorState(styles.fontStyle.add(newEditorState, 'italic'))
    }

    //map array of integers to display options for dropdown
    const fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 38, 46, 54, 62, 72]
    const fontSizeOptions = <select onChange={e => setFontSize(e, e.target.value)}>{fontSizes.map(fontSize => (
        
        <option
            key={`font-size-${fontSize}`}
            className='font-size-option'
            value={`${fontSize}px`}
            //declare event for setting font size
        >{fontSize}</option>
    ))}</select>

    return (
        <div className="edit-toolbar">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Font Size</p>
                {fontSizeOptions}
            </div>
                {/*open or close menu if the button is pressed.*/}
                <button className="edit-btn" onClick={e => setBold(e)}>B</button>
                <button className="edit-btn" onClick={e => setItalic(e)}>I</button>
        </div>
    )
}

export default EditorToolbar