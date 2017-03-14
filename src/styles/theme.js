import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {
  amberA100, amberA200, amberA400,
  purple500, purple700,
  blueGrey500, blueGrey900,
  grey600,
  fullWhite
} from 'material-ui/styles/colors'

import {fade} from 'material-ui/utils/colorManipulator'

export default {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: purple500,
    primary2Color: purple700,
    primary3Color: grey600,
    accent1Color: amberA200,
    accent2Color: amberA400,
    accent3Color: amberA100,
  }
}
