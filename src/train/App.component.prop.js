import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

// React Component
// Properties /Props
function Greeting(props) {
  return <h1>Halo {props.name} <Biodata age={props.age} /></h1>;
};

function Biodata(props) {
  return <span> - umurnya {props.age}</span>
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Rizki" age="25"/>
          <Greeting name="Igo" age="24"/>
        </header>
      </div>
    ); 
  }
};

export default App;
