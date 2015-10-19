'use strict';

import React from 'react';
import FileLoader from './components/FileLoader.jsx';
import PickleBrowser from './components/PickleBrowser.jsx';
import Dial from './components/Dial.jsx'
import App from './components/App.jsx';
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
//
// React.render(
//   React.createElement(Dial),
//   document.getElementById('root')
// );
