import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styles from './App.module.css';

import 'reset-css';

import { Main, Settings, Header } from './components';
import { NAVIGATION } from './framework/constants';

@inject('usersStore')
@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }
  static propTypes = {
    usersStore: PropTypes.shape({
      filter: PropTypes.string,
      updateFilter: PropTypes.func
    })
  };

  componentDidMount() {
    this.props.usersStore.loadUsers();
  }

  onSearchChange = (value) => this.setState(() => ({
    searchValue: value
  }));

  render() {
    const { searchValue } = this.state;


    const headerProps = {
      links: NAVIGATION,
      searchProps: {
        value: searchValue,
        onChange: this.onSearchChange
      }
    };

    return (
      <Router>
        <div className={styles.container}>
          <Header { ...headerProps }  />

          <Route path='/' component={Main} exact={true} />
          <Route path='/settings' component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
