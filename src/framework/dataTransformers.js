import _get from 'lodash.get';

// Use this function for transformation
// data from https://randomuser.me/
// to our UserCard component API
export const transformUserData = (user) => ({
  id: _get(user, 'login.uuid', ''),
  firstName: _get(user, 'name.first', ''),
  lastName: _get(user, 'name.last', ''),
  userName: _get(user, 'login.username', ''),
  email: _get(user, 'email', ''),
  image: _get(user, 'picture.thumbnail', ''),
  country: _get(user, 'nat', ''),
  state: _get(user, 'location.state', ''),
  city: _get(user, 'location.city', ''),
  street: _get(user, 'location.street', ''),
  postcode: _get(user, 'location.postcode', ''),
  phone: _get(user, 'phone', ''),
  cell: _get(user, 'cell', ''),
});

