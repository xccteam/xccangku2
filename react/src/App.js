import React, { Component } from 'react';
import './App.css';
import Register from './components/register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>你好，我是头部</header>
        <div>
          {this.props.children}
        </div>
       
        <footer>你好，我是尾部</footer>
      </div>
    );
  }
}

export default App;
