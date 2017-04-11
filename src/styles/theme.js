import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {
  amberA100, amberA200, amberA400,
  purple500, purple700,
  grey600
} from 'material-ui/styles/colors'

export default {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: purple500,
    primary2Color: purple700,
    primary3Color: grey600,
    accent1Color: amberA200,
    accent2Color: amberA400,
    accent3Color: amberA100
  },
  toolbar: {
    height: 48
  }
}
