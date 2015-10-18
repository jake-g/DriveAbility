let Colors = require('material-ui/lib/styles/colors');
let ColorManipulator = require('material-ui/lib/utils/color-manipulator');
let Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blueGrey500,  //#607D8B
    primary2Color: Colors.blueGrey100,  //#CFD8DC
    primary3Color: Colors.lightBlack,   //rgba(0, 0, 0, 0.54)
    accent1Color: Colors.amber500,      //#FFC107
    accent2Color: Colors.grey100,       //#f5f5f5
    accent3Color: Colors.grey500,       //#9e9e9e
    textColor: Colors.grey900,          //#212121
    alternateTextColor: Colors.white,   //#FFFFFF
    borderColor: Colors.grey300,        //#e0e0e0
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};

// transparent:  'rgba(0, 0, 0, 0)',
//   fullBlack:    'rgba(0, 0, 0, 1)',
//   darkBlack:    'rgba(0, 0, 0, 0.87)',
//   lightBlack:   'rgba(0, 0, 0, 0.54)',
//   minBlack:     'rgba(0, 0, 0, 0.26)',
//   faintBlack:   'rgba(0, 0, 0, 0.12)',
//   fullWhite:    'rgba(255, 255, 255, 1)',
//   darkWhite:    'rgba(255, 255, 255, 0.87)',
//   lightWhite:   'rgba(255, 255, 255, 0.54)',

//From theme generator
// .dark-primary-color    { background: #455A64; }
// .default-primary-color { background: #607D8B; }
// .light-primary-color   { background: #CFD8DC; }
// .text-primary-color    { color: #FFFFFF; }
// .accent-color          { background: #FFC107; }
// .primary-text-color    { color: #212121; }
// .secondary-text-color  { color: #727272; }
// .divider-color         { border-color: #B6B6B6; }
