import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

import { Loader, UsersGrid } from '../../index';

@inject('usersStore')
@observer
class Main extends React.Component {
  static propTypes = {
    usersStore: PropTypes.shape({
      users: PropTypes.array,
      isLoading: PropTypes.bool
    })
  };

  renderLoader = () => {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  };

  render() {
    const { usersStore: { users, isLoading } } = this.props;

    const userGridProps = {
      users: [...toJS(users)],
    };

    return (
      <main className={styles.main}>
        <UsersGrid { ...userGridProps } />
        { isLoading ? this.renderLoader() : false }
      </main>
    )
  }
}

export default Main;
