import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { inject, observer } from 'mobx-react';

import { Loader, UsersGrid } from '../../index';
import { MODAL_USER_DETAILS_KEY } from '../../../framework/constants';

@inject('appStore', 'usersStore')
@observer
class Main extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      showModal: PropTypes.func
    }),
    usersStore: PropTypes.shape({
      users: PropTypes.array,
      isLoading: PropTypes.bool,
      getUserData: PropTypes.func
    })
  };

  // TODO: Add PropTypes and defaultProps

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { usersStore } = this.props;
    const { isLoading, loadUsers } = usersStore;

    if (isLoading) return;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight) - 150) {
      loadUsers();
    }
  };

  onUserClick = (index) => {
    const { appStore, usersStore } = this.props;
    const userData = usersStore.getUserData(index);

    appStore.showModal(MODAL_USER_DETAILS_KEY, userData);
  };

  renderLoader = () => {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  };

  render() {
    const { usersStore } = this.props;
    const { users, isLoading } = usersStore;

    const userGridProps = {
      users,
      onUserClick: this.onUserClick
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
