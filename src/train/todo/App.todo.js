import React, { Component } from 'react';
import './App.css';
import List from './List.js';
// To Do

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: '',
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.toDoItem],
      toDoItem: ''
    });
  }

  handleChange(e) {
    this.setState({
      toDoItem: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.toDoItem} onChange={this.handleChange}/>
          <button>Add To Do</button>
        </form>

        <List items={this.state.items}/>
      </div>
    ); 
  }
};

export default App;
