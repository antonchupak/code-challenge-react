import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styled, { createGlobalStyle } from 'styled-components';

import 'reset-css';

import { Main, Settings, Header } from './components';
import { NAVIGATION } from './framework/constants';

const GlobalStyles = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    min-height: 100%;
  }
  
  #root {
    min-height: 100%;
    height: 100%;
    color: white;
  }
`;

@inject('usersStore')
@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }
  static propTypes = {
    usersStore: PropTypes.shape({
      filter: PropTypes.string,
      updateFilter: PropTypes.func
    })
  };

  componentDidMount() {
    this.props.usersStore.loadUsers();
  }

  onSearchChange = (value) => this.setState(() => ({
    searchValue: value
  }));

  render() {
    const { searchValue } = this.state;

    const Container = styled.div`
      width: 100%;
      min-height: 100%;
      min-width: 1100px;
      line-height: 1.6
      font-family: sans-serif;
      font-size: 16px;
      color: #2c3e50;
      background-color: #bdc3c7;
      box-sizing: border-box;
      
      padding-top: 80px;
    `;

    const headerProps = {
      links: NAVIGATION,
      searchProps: {
        value: searchValue,
        onChange: this.onSearchChange
      }
    };

    return (
      <Router>
        <GlobalStyles />
        <Container>
          <Header { ...headerProps }  />

          <Route path='/' component={Main} exact={true} />
          <Route path='/settings' component={Settings} />
        </Container>
      </Router>
    );
  }
}

export default App;
