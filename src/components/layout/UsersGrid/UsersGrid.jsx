import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { UserCard } from '../../index';

const UserGrid = ({ users }) => {
  const Grid = styled.div`
    padding: 20px
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `;

  return (
    <Grid>
      { users.length ? users.map((user, index) => (<UserCard { ...user } key={index} />)) : false }
    </Grid>
  )
};

UserGrid.propTypes = {
  users: PropTypes.array
};

UserGrid.defaultProps = {
  users: []
};

export default UserGrid;
