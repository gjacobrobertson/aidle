import { connect } from 'react-redux'
import { game as actions } from '../actions'
import { Game } from '../components'

const mapStateToProps = ({ game: { guesses, cash } }) => ({ guesses, cash: cash.toExponential(2) })

const mapDispatchToProps = (dispatch) => ({ onGuess: (g) => dispatch(actions.guess(g)) })

export default connect(mapStateToProps, mapDispatchToProps)(Game)
