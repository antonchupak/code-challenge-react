import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    const LoaderContainer = styled.div`
      margin-bottom: 20px;
      text-align: center;
      line-height: 0;
    `;

    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  };

  render() {
    const { usersStore: { users, isLoading } } = this.props;

    const userGridProps = {
      users: [...toJS(users)],
    };

    const Main = styled.main`
      min-height: 100%;
    `;

    return (
      <Main>
        <UsersGrid { ...userGridProps } />
        { isLoading ? this.renderLoader() : false }
      </Main>
    )
  }
}

export default Main;
