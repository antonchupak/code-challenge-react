import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { inject, observer } from 'mobx-react';

import { Loader, UsersGrid } from '../../index';
import { USER_API_NUMBER_OF_MAX_USERS, MODAL_USER_DETAILS_KEY } from '../../../framework/constants';

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
      usersCounter: PropTypes.number,
      getUserData: PropTypes.func
    })
  };

  // TODO: Add PropTypes and defaultProps

  componentDidMount() {
    this.props.usersStore.loadUsers();
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { usersStore } = this.props;
    const { isLoading, loadUsers, usersCounter } = usersStore;

    const breakpointForLoading = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight);
    const noMoreUsers = usersCounter >= USER_API_NUMBER_OF_MAX_USERS;

    if (isLoading || noMoreUsers) return;

    if (breakpointForLoading) {
      loadUsers();
    }
  };

  onUserClick = (index) => {
    const { appStore, usersStore } = this.props;
    const userData = usersStore.getUserData(index);

    appStore.showModal(MODAL_USER_DETAILS_KEY, userData);
  };

  renderLoader = () => (
    <div className={styles.loader}>
      <Loader />
    </div>
  );

  renderEndBlock = () => (
    <div className={styles.end}>
      <h5>End of users catalog</h5>
    </div>
  );

  render() {
    const { usersStore } = this.props;
    const { users, isLoading, usersCounter } = usersStore;
    const noMoreUsers = usersCounter >= USER_API_NUMBER_OF_MAX_USERS;

    const userGridProps = {
      users,
      onUserClick: this.onUserClick
    };

    return (
      <main className={styles.main}>
        <UsersGrid { ...userGridProps } />
        { isLoading ? this.renderLoader() : false }
        { noMoreUsers ? this.renderEndBlock() : false }
      </main>
    )
  }
}

export default Main;
