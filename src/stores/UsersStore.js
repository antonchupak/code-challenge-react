import { observable, action } from 'mobx';
import UsersAPI from '../services/users';

import { transformUsersData } from '../framework/dataTransformers';

class UsersStore {
  @observable users = [];
  @observable filter = 'lalala';
  @observable nationality = '';
  @observable isLoading = true;

  @action loadUsers = () => {
    this.isLoading = true;

    UsersAPI.getRandomUsers(this.nationality)
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

  @action updateNationality = (value) => {
    this.nationality = value;
  };
}

export default new UsersStore();
