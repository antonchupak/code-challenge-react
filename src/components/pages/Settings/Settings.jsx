import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import styles from './Settings.module.css';

import { Select } from './../../index';
import { USER_NATIONALITIES } from './../../../framework/constants';

@inject('usersStore')
@observer
class Settings extends React.Component {
  static propTypes = {
    usersStore: {
      filter: PropTypes.string,
      nationality: PropTypes.string,
      updateNationality: PropTypes.func,
      clearFilter: PropTypes.func,
      loadUsers: PropTypes.func
    }
  };

  onNationalityChange = (value) => {
    const { usersStore } = this.props;
    const { filter, updateNationality, loadUsers, clearFilter } = usersStore;

    // Process special case for load all nationalities
    const resolveNationality = value === 'All' ? '' : value;

    updateNationality(resolveNationality);
    loadUsers();

    // If the filter is active remove it when nationality was changed
    if (filter) {
      clearFilter();
    }
  };

  render() {
    const { usersStore } = this.props;
    const { nationality } = usersStore;

    const selectProps = {
      className: styles.select,
      value: nationality,
      options: USER_NATIONALITIES,
      onChange: this.onNationalityChange
    };

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          Settings Page
        </h1>
        <div className={styles.configRow}>
          <span className={styles.description}>If you want to show users from a specific country select it here</span>
          <Select { ...selectProps } />
        </div>
      </main>
    )
  }
};

export default Settings;
