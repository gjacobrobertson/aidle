import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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

    const styles = {
      root: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 24px',
      },
      input: {
        flex: 1,
        marginRight: 24,
        position: 'relative',
      },
      button: {
      }
    }

    return (
      <form className='guess-control' style={styles.root} onSubmit={this.onSubmit}>
        <TextField
          style={styles.input}
          id='guess-text-field'
          value={this.state.value}
          onChange={this.onChange} />
        <RaisedButton
          style={styles.button}
          label='Guess'
          primary={true}
          onTouchTap={this.onSubmit} />
      </form>
    )
  }
}

GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired
}

export default GuessControl
