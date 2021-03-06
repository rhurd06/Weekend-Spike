import {useState} from 'react';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';

import home from '../home/home';
import upload from '../upload/upload';
import './App.css';

function App () {
  
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={home} />
          <Route path="/upload" component={upload} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
