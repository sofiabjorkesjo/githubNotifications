import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        response: ''
    };

    getTemporaryCode = () => {
        const search = window.location.search;
        const code = search.substring(6);
        return code 
      }

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/' + this.getTemporaryCode());
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
        console.log(body)
        return body;
      };

    render() {
        return (
            <p>Dashboard</p>
        )
    }
}

export default Dashboard;