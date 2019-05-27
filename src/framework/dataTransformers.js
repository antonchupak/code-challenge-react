import _get from 'lodash.get';

// Use this function for transformation
// data from https://randomuser.me/
// to our UserCard component API
export const transformUsersData = (users) => users.map((user) => {
  debugger;
  return ({
    firstName: _get(user, 'name.first', ''),
    lastName: _get(user, 'name.last', ''),
    userName: _get(user, 'login.username', ''),
    email: _get(user, 'email', ''),
    image: _get(user, 'picture.thumbnail', '')
  });
});
