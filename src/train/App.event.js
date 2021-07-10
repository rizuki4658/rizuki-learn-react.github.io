import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

// Event
/*
function Clicker() {
  function handleClick(e) {
    alert('berhasil click');
    e.preventDefault();
  };

  return (
    <a href="#" onClick={handleClick}> Klik Disini </a>
  );
};
*/
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true
    };

    // mendeklarasikan metode bind untuk penggunaan this didalam function
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>
          Kondisi Sekarang {this.state.toggleStatus ? 'Nyala' : 'Mati'}
        </p>
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle/>
        </header>
      </div>
    ); 
  }
};

export default App;
