import { observable, action, computed, toJS } from 'mobx';
import UsersAPI from '../services/users';

import { transformUserData } from '../framework/dataTransformers';

class UsersStore {
  @observable users = observable([]);
  @observable page = 1;
  @observable filter = '';
  @observable nationality = '';
  @observable isLoading = true;

  @action loadUsers = () => {
    this.isLoading = true;

    UsersAPI.getRandomUsers(this.nationality, this.page)
      .then((response) => {
        const { data } = response;

        if (data.results.length) {
          data.results.forEach((user) => {
            const transformedUser = transformUserData(user);
            this.users.push(transformedUser);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
        this.increasePage();
      });
  };

  @action increasePage () {
    this.page += 1;
  }

  @computed get usersCounter () {
    return this.users.length;
  };

  @action updateFilter = (value) => {
    this.filter = value;
  };

  @action updateNationality = (value) => {
    this.nationality = value;
    this.users.clear();
  };

  @action getUserData = (index) => {
    const data = this.users.get(index);
    return toJS(data);
  };
}

export default new UsersStore();
