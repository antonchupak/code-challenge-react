import axios from 'axios';

import { USER_API_URL, USER_API_NUMBER_OF_USERS } from './../framework/constants';

class UsersAPI {
  getRandomUsers = (nationality, page = 1) => {
    const NATIONALITY = nationality ? `&nat=${nationality}` : '';
    const url = `${USER_API_URL}?page=${page}&results=${USER_API_NUMBER_OF_USERS}${NATIONALITY}`;

    return axios.get(url);
  }
}

export default new UsersAPI();
