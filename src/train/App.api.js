import React, { Component } from 'react';
import './App.css';

// API CONSUME

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => this.setState({ items: data, isLoading: false }));
  }

  render() {
    const {items, isLoading} = this.state;

    if (isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <ul>
          {
            items.map((item, key) => {
              return <li key={key}>{item.name}</li>
            })
          }
        </ul>
      </div>
    ); 
  }
};

export default App;
