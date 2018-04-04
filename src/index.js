import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router,Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Second from './Second'

const customHistory = createBrowserHistory()

const Main = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Second" component={Second} />
    </div>
  </Router>
);


ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
