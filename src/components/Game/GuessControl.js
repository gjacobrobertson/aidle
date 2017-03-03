import React, { Component, PropTypes } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class GuessControl extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    this.setState({value: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    this.setState({value: ''})
    this.props.onGuess(this.state.value)
  }

  render () {
    const {muiTheme} = this.props
    const style = {
      borderTopWidth: 4,
      borderTopStyle: 'solid',
      borderTopColor: muiTheme.palette.borderColor,
      display: 'flex',
      alignItems: 'stretch'
    }

    return (
      <form className='guess-control' style={style} onSubmit={this.onSubmit}>
        <TextField
          id='guess-text-field'
          value={this.state.value}
          onChange={this.onChange}
          style={{
            flex: 1,
            margin: '0px 12px',
            position: 'relative'
          }} />
        <FlatButton
          label='Guess'
          backgroundColor={muiTheme.palette.primary1Color}
          hoverColor={muiTheme.palette.primary2Color}
          onClick={this.onSubmit}
          style={{borderRadius: 0, height: 'auto'}}
        />
      </form>
    )
  }
}

GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired
}

export default muiThemeable()(GuessControl)
