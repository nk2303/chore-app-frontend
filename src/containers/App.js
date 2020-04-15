import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { api } from '../services/api';
import NavBar from './NavBar';
import Landing from './Landing';
import Account from './Account';
import HouseContainer from './HouseContainer';
import background from '../assets/recycling-texture.JPG';


// authUser gets looked up in database
// chores.filter(user == authUser).map((chore) => chore.day? send to Schedule : UserChores)

class App extends React.Component {
   sectionStyle = {
    backgroundImage: `url(${background})`,
    'min-height': '800px',
    'background-size':'cover'
  };

  constructor() {
    super();
    this.state = {
      authUser: {},
      location: {},
      users: [],
      chores: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      api.auth.getCurrentUser().then(user => {
        this.setState({ authUser: user.user });
      });
    }
  }

  login = data => {
    localStorage.setItem("token", data.jwt);
    this.setState({ authUser: data.user });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ authUser: {}, });
  };

  returningUser = data => {
    this.setState({ authUser: data.user})
  }

  updateState = data => {
    const {name, id, creator, users, chores} = data.location;
    this.setState({
      location: {name, id, creator},
      users, 
      chores
    })
  }

  render() {
      return (
        <div style={this.sectionStyle}>
          <Router>
            <NavBar/>
            <Route exact path='/' render={(props)=><Landing {...props} onLogin={this.login} onReturningUser={this.returningUser} />}/>
            <Route exact path='/account' render={(props)=><Account {...props} authUser={this.state.authUser} />}/>
            <Route exact path='/house' render={(props)=><HouseContainer {...props} users={this.state.users} chores={this.state.chores} authUser={this.state.authUser} updateState={this.updateState} />}/>
          </Router>
    
        </div>
      );
    }
  }

export default App;
