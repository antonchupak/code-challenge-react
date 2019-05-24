import { observable, action } from 'mobx';

class AppStore {
  @observable loading = true;

  @action changeLoading = () => {
    this.loading = !this.loading;
  }
}

export default new AppStore();
