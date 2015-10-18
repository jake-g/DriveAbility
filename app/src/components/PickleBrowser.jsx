'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

//AppBar
import AppBar from 'mat-lib/app-bar';

//Paper
import Paper from 'mat-lib/paper';

import ArrowBack from 'mat-lib/svg-icons/navigation/arrow-back';
import MoreVert from 'mat-lib/svg-icons/navigation/more-vert';
import IconButton from 'mat-lib/icon-button';
import IconMenu from 'mat-lib/menus/icon-menu';
import MenuItem from 'mat-lib/menus/menu-item';
import Menu from 'mat-lib/menus/menu';

import Colors from 'mat-lib/styles/colors';

import List from 'mat-lib/lists/list';
import ListItem from 'mat-lib/lists/list-item';

class PickleBrowser extends ReactCSS.Component {

  render() {
    return (

      <div style={{backgroundColor: "#EEEEEE", height: "100vh"}}>
        <AppBar zDepth={0}
          title="13-41-02_CorrectedFlowthrough"
          iconElementLeft={<IconButton><ArrowBack /></IconButton>}
          iconElementRight={
            <IconMenu iconButtonElement={<IconButton><MoreVert color={Colors.white}/></IconButton>}>
                <MenuItem primaryText="Export CSV" />
                <MenuItem primaryText="View raw pickle" />
            </IconMenu>}>
        </AppBar>
        <Paper zDepth={1} rounded={false} style={{height: '100%', width:'256px', float: 'right', backgroundColor: Colors.grey50}}>
          <div>

          </div>

        </Paper>
      </div>

    );
  }
}

export default PickleBrowser;

// <IconMenu iconButtonElement={<IconButton><MoreVert/></IconButton>}>
//     <MenuItem primaryText="refresh" />
//     <MenuItem primaryText="refresh" />
// </IconMenu>
