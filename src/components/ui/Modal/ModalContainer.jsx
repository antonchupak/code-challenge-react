import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './Modal.module.css';

import { ModalFactory } from './ModalFactory';

@inject('appStore')
@observer
class ModalContainer extends React.Component {
  // TODO: Add PropTypes and defaultProps

  renderContent = () => {
    const { appStore } = this.props;
    const { modals, hideModal } = appStore;
    const components = [];

    modals.forEach((val, key) => {
      const { ...props } = val;
      const component = ModalFactory[key](props);

      components.push(
        <div className={styles.container} key={key}>
          <div className={styles.box}>
            <div className={styles.header}>
              <button className={styles.close} onClick={hideModal} />
            </div>
            <div className={styles.content}>
              { component }
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        { components }
      </>
    )
  };

  render() {
    return this.renderContent();
  }
}

export default ModalContainer;
