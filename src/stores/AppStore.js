import { observable, action } from 'mobx';

class AppStore {
  @observable modals = observable.map();

  @action showModal = (id, props) => {
    this.modals.set(id, props);
  };

  @action hideModal = () => {
    this.modals.clear()
  };
}

export default new AppStore();
