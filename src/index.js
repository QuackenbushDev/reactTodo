import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

require('../css/todomvc_base.css');
require('../css/todomvc_app.css');

render(<App />, document.getElementById('app'));
