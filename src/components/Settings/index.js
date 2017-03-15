import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

const styles = {
  root: {
    padding: 12
  }
}

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  openDialog() {
    this.setState({ open: true })
  }

  closeDialog() {
    this.setState({ open: false })
  }

  onReset() {
    this.closeDialog()
    this.props.reset()
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.closeDialog}
      />,
      <FlatButton
        label='Reset'
        primary={true}
        onTouchTap={this.onReset}
      />
    ]
    return (
      <div style={styles.root}>
        <RaisedButton
          label='Hard Reset'
          primary={true}
          onTouchTap={this.openDialog} />
        <Dialog
          title='Hard Reset Game'
          modal={false}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.closeDialog}>
          This will reset the entire game. Are you sure you wish to continue?
        </Dialog>
      </div>
    )
  }
}

Settings.propTypes = {
  reset: PropTypes.func.isRequired
}

export default Settings
