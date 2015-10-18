'use strict';

import React from 'react';
import RaisedButton from 'mat-lib/raised-button';
import Dialog from 'mat-lib/dialog';
import ThemeManager from 'mat-lib/styles/theme-manager';
import LightRawTheme from 'mat-lib/styles/raw-themes/light-raw-theme';
import Colors from 'mat-lib/styles/colors';

import FileLoader from './FileLoader.jsx';
import PickleBrowser from './PickleBrowser.jsx';
import Router from 'react-router';
var { Route, RouterHandler, Link } = Router;

class App extends React.Component {

  constructor() {
    super();

    // this. _handleClick = this. _handleClick.bind(this)
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.amber500,
    });

    this.setState({muiTheme: newMuiTheme});
  }

  render() {
    return (
      <RouterHandler />
    );
  }

  // _handleClick() {
  //   this.refs.superSecretPasswordDialog.show();
  // }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};
// 
// var routes = (
//   <Route handler={App}>
//     <Route path="/" component={FileLoader}>
//       <Route path="/browser/:fileid" component={PickleBrowser}/>
//     </Route>
//   </Route>
//
// );
//
// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('root'));
// });

// <Route path="*" component={NoMatch}/>
// <Route path="users" component={Users}>
//   <Route path="/user/:userId" component={User}/>
// </Route>

export default App;
