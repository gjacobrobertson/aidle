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

const AgentEditor = (props) => {
  return <CodeMirror {...props} options={options} style={style}/>
}

AgentEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default AgentEditor
