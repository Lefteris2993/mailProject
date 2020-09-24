import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import Login from './componets/pages/login/Login';
import Header from './componets/layout/Header';
import Settings from './componets/pages/settings/Settings.js';
import Compose from './componets/pages/compose/Compose.js';
import Inbox from './componets/pages/inbox/Inbox';
import Threads from './componets/pages/threads/Threads';
import Register from './componets/pages/login/Register';
import NavBar from './componets/layout/NavBar'
import Index from './componets/pages/index/Index'



class App extends Component {

  state = {
    status: [ 
      {
        connected: false,
        userName: '',
        userID: ''
      }
    ]
  }
  

  tryLogin = (userName, password) =>{
    console.log(userName, password);
    Axios.get('http://localhost:6969/login', {
      headers: {
        userName: userName,
        password: password
      }
    }).then(res => {
      console.log(res.data)
      if (res.data !== -1) {
        console.log('OK');
        this.setState({ status: {connected: true, userID: res.data, userName: userName }})
        console.log(this.state)
        return('OK');
      } else {
        console.log('NO');
        return('NO');
        //window.location.assign('/');
      }
      
    })
  }

  regReq = (userName, password, confirmPassword) => {
    console.log(userName, password);
    if (password === confirmPassword) {
      Axios.get('http://localhost:6969/register', {
        headers: {
          userName: userName,
          password: password
        }
      }).then(res => {
        window.location.assign('/')
      })
    }
  } 

  render(){
    return(
      <Router>
        <div className="App" >
          <div className="container" >
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Login tryLogin={this.tryLogin} />
              </React.Fragment>
            )} />  

            <Route  path="/register" render={props => (
              <React.Fragment>
                <Register regReq={this.regReq} />
              </React.Fragment>
            )} />  

            <Route  path="/index" render={props => (
              <React.Fragment>
                <NavBar />
                <Index  status = {this.state.status} />
              </React.Fragment>
            )} />          

            <Route path="/settings" render={props => (
              <React.Fragment>
                <NavBar />
                <Settings />
              </React.Fragment>
            )} />  

            <Route path="/compose" render={props => (
              <React.Fragment>
                <NavBar />
                <Compose />
              </React.Fragment>
            )} /> 

            <Route path="/threads" render={props => (
              <React.Fragment>
                <NavBar />
                <Threads />
              </React.Fragment>
            )} /> 

            <Route path="/inbox" render={props => (
              <React.Fragment>
                <NavBar />
                <Inbox />
              </React.Fragment>
            )} /> 

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
