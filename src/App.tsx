import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Heroes from './heroes/heroes';

class App extends React.Component {
  public render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React Tour of Heroes
          </h1>
        </header>

        <Heroes/>

      </div>
    );
  }
}

export default App;
