import React, { Component } from 'react';
import './App.css';
import Register from './components/register'
import Mock from 'mockjs';

Mock.mock('http://www.baidu.com/api', {
  "user|13": [
    {
      "ids|+1": 0,
      "name": "@province()",
      "detail|1-8": [{ "imgname": "@dataImage('290x163')", "text": "@cparagraph(20,50)", "address": "@city()", "people": "@integer(1,100)", "price": "@integer(120,980)", "priceold|0-1": "@integer(130,1000)", "zhekou": "@integer(1,10)", "dianping": "@integer(0,100)" }],
    }
  ]
})

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
