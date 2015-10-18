'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

//Buttons
import FlatButton from 'mat-lib/flat-button';

//Icons
import Poll from 'mat-lib/svg-icons/social/poll';

//Styles
import Colors from 'mat-lib/styles/colors';

var flatButtonSize = 36;
var iconButtonSize = 48;

export default class GraphPaperButton extends ReactCSS.Component {
  classes() {
    return {
      'default': {
        button: {
          backgroundColor: 'transparent',
          color: this.props.color,
          marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
        },
        iconElementRight: {
          position: 'relative',
          padding: '0 16px 0 8px'
        },
        pollIconElementRight: {
          display: 'relative',
          verticalAlign: 'middle',
          padding: '0 8px',
          width: '16px',
          height: '16px'
        },
      }
    };
  }

  render() {
    return (
      <FlatButton is="button">
        <span is="iconElementRight"><Poll is="pollIconElementRight" color={this.props.color}/>Graph paper</span>
      </FlatButton>
    );
  }
}
