import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { inject, observer } from 'mobx-react';

import { Loader, UsersGrid } from '../../index';
import { USER_API_NUMBER_OF_MAX_USERS, MODAL_USER_DETAILS_KEY } from '../../../framework/constants';

@inject('appStore', 'usersStore')
@observer
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpButton: false
    }
  }

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
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.resolveUpButtonShowing();
    const { usersStore } = this.props;
    const { isLoading, loadUsers, usersCounter } = usersStore;
    const noMoreUsers = usersCounter >= USER_API_NUMBER_OF_MAX_USERS;

    if (isLoading || noMoreUsers) return;

    const breakpointForLoading = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight);

    if (breakpointForLoading) {
      loadUsers();
    }
  };

  onUserClick = (index) => {
    const { appStore, usersStore } = this.props;
    const userData = usersStore.getUserData(index);

    appStore.showModal(MODAL_USER_DETAILS_KEY, userData);
  };

  onUpButtonClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  resolveUpButtonShowing = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState(() => ({ showUpButton: true }))
    } else {
      this.setState(() => ({ showUpButton: false }))
    }
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

  renderDefaultUsers = () => {
    const { usersStore } = this.props;
    const { users  } = usersStore;

    const usersGridProps = {
      users,
      onUserClick: this.onUserClick
    };

    return (<UsersGrid { ...usersGridProps } />)
  };

  renderFilteredUsers = () => {
    const { usersStore } = this.props;
    const { usersFiltered } = usersStore;

    const usersFilteredGridProps = {
      users: usersFiltered,
      onUserClick: this.onUserClick
    };

    return (<UsersGrid { ...usersFilteredGridProps } />)
  };

  renderButton = () => {
    return (<span className={styles.buttonTop} onClick={this.onUpButtonClick} />)
  };

  render() {
    const { usersStore } = this.props;
    const { showUpButton } = this.state;
    const { filter, isLoading, usersCounter } = usersStore;
    const noMoreUsers = usersCounter >= USER_API_NUMBER_OF_MAX_USERS;

    return (
      <main className={styles.main}>
        { !filter ? this.renderDefaultUsers() : this.renderFilteredUsers() }
        { isLoading && this.renderLoader() }
        { noMoreUsers && !filter && this.renderEndBlock() }
        { showUpButton && this.renderButton() }
      </main>
    )
  }
}

export default Main;
