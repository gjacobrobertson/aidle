import {
  amberA100, amberA200, amberA400,
  purple500, purple700,
  blueGrey500, blueGrey900,
  grey600,
  fullWhite
} from 'material-ui/styles/colors'

import {fade} from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: purple500,
    primary2Color: purple700,
    primary3Color: grey600,
    accent1Color: amberA200,
    accent2Color: amberA400,
    accent3Color: amberA100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: blueGrey900,
    canvasColor: blueGrey900,
    borderColor: blueGrey500,
    disabledColor: blueGrey500,
    pickerHeaderColor: purple500,
    clockCircleColor: purple500
  }
}
