import React, { Component } from 'react';
import Counter from './components/counter.component.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* Start counter */}
          <Counter 
            value ={ this.props.value }
            onIncrement = { this.props.onIncrement }
            onDecrement = { this.props.onDecrement }
            incrementIfOdd = { this.props.incrementIfOdd }
          />
      </div>
    );
  }
}

export default App;
