import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Button,
  Icon, Avatar
} from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary">Button</Button>
          <Button type = "dashed" > Dashed </Button> 
          <Button type = "danger" > Danger </Button>
          <div className = "icons-list" >
            <Icon type = "smile" theme = "twoTone" />
            <Icon type = "heart" theme = "twoTone" twoToneColor = "#eb2f96" />
            <Icon type = "check-circle" theme = "twoTone" twoToneColor = "#52c41a" />
          </div>
          <div>
            <Avatar icon = "user" />
            <Avatar > U </Avatar> 
            <Avatar > USER </Avatar> 
            <Avatar src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style = {{color: '#f56a00',backgroundColor: '#fde3cf'}}> U </Avatar> 
            <Avatar style = {{backgroundColor: '#87d068'}}icon = "user" />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
