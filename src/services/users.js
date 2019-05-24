import axios from 'axios';

import { USER_API_URL, USER_API_NUMBER_OF_USERS, USER_API_DEFAULT_NATIONALITY } from './../framework/constants';

class UsersAPI {
  getRandomUsers = (nat) => {
    const NATIONALITY = nat || USER_API_DEFAULT_NATIONALITY;
    const url = `${USER_API_URL}?results=${USER_API_NUMBER_OF_USERS}&nat=${NATIONALITY}`;

    return axios.get(url);
  }
}

export default new UsersAPI();
