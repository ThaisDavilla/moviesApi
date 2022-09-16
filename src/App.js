import React, { Component } from 'react';
import Header from './Components/Header.js';
import { GlobalStyle } from './Components/Styled';

class App extends Component {


  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;