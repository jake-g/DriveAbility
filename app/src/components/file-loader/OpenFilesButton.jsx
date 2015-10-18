'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

//Button
import FloatingActionButton from 'mat-lib/floating-action-button';

//Icons
import Add from 'mat-lib/svg-icons/content/add';

//Styles
import Colors from 'mat-lib/styles/colors';

export default class OpenFilesButton extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        addFileInput: {
          bottom: "0",
          cursor: "pointer",
          left: "0",
          opacity: "0",
          position: "absolute",
          right: "0",
          top: "0",
          width: "100%",
        },
      }
    };
  }

  render() {
    return (
      <FloatingActionButton style={this.props.style} backgroundColor={this.props.backgroundColor}>
        <div>
          <input ref="fileInput" type="file" is="addFileInput" onChange={this.props.onChange} multiple></input>
          <Add color={this.props.iconColor} style={{verticalAlign: "middle"}}/>
        </div>
      </FloatingActionButton>
    );
  }
}
