import React, { Component } from 'react';
import './App.css';
import Register from './components/register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {this.props.children}
        </div>
       

        

      </div>
    );
  }
}

export default App;
