import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Settings.module.css';

import { Select } from './../../index';
import { USER_NATIONALITIES } from './../../../framework/constants';

@inject('usersStore')
@observer
class Settings extends React.Component {
  // TODO: Add PropTypes and defaultProps

  onNationalityChange = (value) => {
    const { usersStore } = this.props;
    const { updateNationality, loadUsers } = usersStore;

    // Process special case for load all nationalities
    const resolveNationality = value === 'All' ? '' : value;

    updateNationality(resolveNationality);
    loadUsers();
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
