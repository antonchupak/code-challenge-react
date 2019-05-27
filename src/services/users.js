import axios from 'axios';

import { USER_API_URL, USER_API_NUMBER_OF_USERS, USER_API_DEFAULT_NATIONALITY } from './../framework/constants';

class UsersAPI {
  getRandomUsers = (nationality) => {
    const NATIONALITY = nationality ? `&nat=${nationality}` : '';
    const url = `${USER_API_URL}?results=${USER_API_NUMBER_OF_USERS}${NATIONALITY}`;

    return axios.get(url);
  }
}

export default new UsersAPI();
