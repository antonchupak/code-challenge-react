import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import './App.css';

import 'reset-css';

import { Header, ModalContainer } from './components';
import { NAVIGATION } from './framework/constants';

@inject('usersStore')
@observer
class App extends React.Component {
  static propTypes = {
    usersStore: PropTypes.shape({
      filter: PropTypes.string,
      loadUsers: PropTypes.func,
      updateFilter: PropTypes.func,
      usersCounter: PropTypes.number
    })
  };

  componentDidMount() {
    this.props.usersStore.loadUsers();
  }

  onFilterChange = (value) => {
    this.props.usersStore.updateFilter(value);
  };

  render() {
    const { usersStore } = this.props;
    const { filter, usersCounter } = usersStore;

    const headerProps = {
      links: NAVIGATION,
      searchProps: {
        value: filter,
        onChange: this.onFilterChange
      }
    };

    return (
      <div className='container'>
        <Header { ...headerProps }  />
        <span className='size'>Size: {usersCounter}</span>
        { this.props.children }
        <ModalContainer />
      </div>
    );
  }
}

export default App;
