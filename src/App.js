import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component'; 
import Main from './components/main/main.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
