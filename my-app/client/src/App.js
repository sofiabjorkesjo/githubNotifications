import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Settings from './views/settings';
import Dashboard from './views/dashboard';


class App extends Component {
  state = {
    response: '',
    link: 'https://github.com/login/oauth/authorize/?scope=admin:org_hook,repo,user&client_id=d702535635ce5d0d5c42',
    login: 'Log in'

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="links">
          <li><Link to="/Settings">Settings</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>      
        </div>
        <a href={this.state.link}>{this.state.login}</a>          
        <Route path="/Settings" render={()=><Settings />}/> 
        <Route path="/Dashboard" render={()=><Dashboard />}/>  
      </div>
    );
  }
}

export default App;
