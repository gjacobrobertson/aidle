import { connect } from 'react-redux'
import { game as actions } from '../../actions'
import { Game } from '../../components/Game'

const mapStateToProps = ({ game: { guesses } }) => ({ guesses })

const mapDispatchToProps = (dispatch) => ({ onGuess: (g) => dispatch(actions.guess(g)) })

export default connect(mapStateToProps, mapDispatchToProps)(Game)
