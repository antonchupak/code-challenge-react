import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, Button } from './../../index';

const UserCard = ({ firstName, lastName, userName, email, image }) => {
  const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 19.5%;
    margin-bottom: 0.5%;
    background-color: white;
    border: 2px solid rgba(155, 89, 182, 1);
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    
    :hover {
      border-color: rgba(155, 89, 182, 0.8);
    }
  `;

  const CardData = styled.div`
    width: 100%;
    text-align: center;
    margin: 10px 0;
  `;

  const UserName = styled.p`
    line-height: 1;
    margin: 4px 0;
    text-transform: capitalize; 
  `;

  const TextItem = styled.span`
    display: inline-block;
    max-width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 16px;
    
    
    ${lastName && `
      :last-child {
        margin-left: 4px
      }
    `}
    
  `;

  const UserNick = styled.p`
    margin-bottom: 4px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    opacity: 0.7;
  `;

  const Email = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    opacity: 0.9;
  `;

  return (
    <Card>
      <div>
        <Avatar image={image} />
      </div>
      <CardData>
        <UserName>
          <TextItem>{firstName}</TextItem>
          <TextItem>{lastName}</TextItem>
        </UserName>
        <UserNick>{userName}</UserNick>
        <Email>{email}</Email>
      </CardData>
      <Button>Details</Button>
    </Card>
  )
};

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string
};

UserCard.defaultProps = {
  firstName: '',
  lastName: '',
  userName: '',
  email: ''
};

export default UserCard;
