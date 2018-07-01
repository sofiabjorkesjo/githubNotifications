import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Settings from './views/settings';
//import Dashboard from './views/dashboard'


class App extends Component {
  state = {
    response: '',
    link: 'https://github.com/login/oauth/authorize/?scope=admin:org_hook,repo,user&client_id=d702535635ce5d0d5c42',
    login: 'Log in'

  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hej');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="links">
          {/* <li><Link to="/Settings">Settings</Link></li>     */}
        </div>
        <a href={this.state.link}>{this.state.login}</a>          
        <Route path="/Settings" render={()=><Settings />}/>  
      </div>
    );
  }
}

export default App;
