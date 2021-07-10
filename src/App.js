import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

// SPA React Router

function Home() {
  return <h1>Halaman Home</h1>;
};

function ListUser() {
  return (
    <div>
      <h1>Halaman User</h1>
      <ul>
        <li><Link to="user/rizki">Rizki</Link></li>
        <li><Link to="user/igo">Igo</Link></li>
      </ul>
    </div>
  );
};

function NotFound() {
  return <h1>404 Not Found!</h1>;
};

function DetailUser({ match }) {
  return <h1> Ini Halaman {match.params.name} </h1>;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
          </nav>


          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" exact component={ListUser} />
              <Route path="/user/:name" exact component={DetailUser}/>
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    ); 
  }
};

export default App;
