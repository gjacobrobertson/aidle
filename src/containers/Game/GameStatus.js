import { connect } from 'react-redux'
import { GameStatus } from '../../components/Game'

const mapStateToProps = ({ game: { cash, completions } }) => ({ cash: cash.toExponential(2), completions })

export default connect(mapStateToProps)(GameStatus)
