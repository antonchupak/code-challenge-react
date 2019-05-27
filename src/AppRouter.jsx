import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// General container
import App from './App';

// Pages
import { Main, Settings } from './components/index';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path='/' component={Main} exact={true} />
          <Route path='/settings' component={Settings} />
        </App>
      </Router>
    );
  }
}

export default AppRouter;
