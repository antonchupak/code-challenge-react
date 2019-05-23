import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'reset-css';

import { Main, Settings, Navigation } from './components';
import { NAVIGATION } from './framework/constants';

function App() {
  return (
    <Router>
      <div>
        <Navigation links={NAVIGATION} />

        <Route path='/' component={Main} exact={true} />
        <Route path='/settings' component={Settings} />
      </div>
    </Router>
  );
}

export default App;
