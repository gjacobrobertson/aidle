import React, {PropTypes} from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'

const options = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'material'
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1
}

const Editor = (props) => {
  return (
    <div className="editor" style={style}>
      <CodeMirror {...props} options={options}/>
    </div>
  )
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor