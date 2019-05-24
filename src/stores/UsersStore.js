import { observable, action } from 'mobx';
import UsersAPI from '../services/users';

import { transformUsersData } from '../framework/dataTransformers';
import { USER_API_DEFAULT_NATIONALITY } from '../framework/constants';

class UsersStore {
  @observable users = [];
  @observable filter = 'lalala';
  @observable nationality = USER_API_DEFAULT_NATIONALITY;
  @observable isLoading = true;

  @action loadUsers = (nat) => {
    this.isLoading = true;

    UsersAPI.getRandomUsers(nat)
      .then((response) => {
        const { data } = response;

        if (data.results.length) {
          this.users = transformUsersData(data.results);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false
      });
  };

  @action updateFilter = (value) => {
    this.filter = value;
  };
}

export default new UsersStore();
