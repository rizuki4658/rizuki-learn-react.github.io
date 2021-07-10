import React, { Component } from 'react';
import './App.css';

// SPA React Router

class App extends Component {
  render() {
    return (
      <table border="1">
        <tbody>
          <tr>
            <Column/>
          </tr>
        </tbody>
      </table>
    ); 
  }
};

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Column Satu</td>
        <td>Column Dua</td>
      </React.Fragment>
    );
  }
};

export default App;
