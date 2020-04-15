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
    minHeight: '800px',
    backgroundSize:'cover'
  };

  constructor() {
    super();
    this.state = {
      authUser: {},
      location: {},
      users: [],
      chores: [],
      isAdmin: false
    };
  }

  isAdmin() {
    (this.state.location.creator === this.state.authUser.id) ? 
    ( this.setState({isAdmin: true}) )
    :
    ( this.setState({isAdmin: false}) )
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
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

  setLocationInfo = data => {
    console.log("under App", data);
    const {name, id, creator, users, chores} = data.location;
    this.setState({
      location: {name, id, creator},
      users, //array of objs
      chores //array of objs
    })
    this.isAdmin()
  }

  addHouse = data => {
    console.log(data.user)
    this.setState({
      authUser: data.user
    })
  }

  addHouse = data => {
    console.log(data.user)
    this.setState({
      authUser: data.user
    })
  }

  render() {
    console.log("location in app", this.state.location)
      return (
        <div style={this.sectionStyle}>
          <Router>
            <NavBar handleLogout={this.logout} authUser={this.state.authUser} />
            <Route exact path='/' render={(props)=><Landing {...props} onLogin={this.login} onReturningUser={this.returningUser} />}/>
            <Route exact path='/account' render={(props)=><Account {...props} isAdmin={this.state.isAdmin} authUser={this.state.authUser} location={this.state.location} users={this.state.users} onAddHouse={this.addHouse} />}/>
            <Route exact path='/house' render={(props)=><HouseContainer {...props} isAdmin={this.state.isAdmin} authUser={this.state.authUser} chores={this.state.chores} users={this.state.users} setLocationInfo={this.setLocationInfo} />}/>
          </Router>
    
        </div>
      );
    }
  }

export default App;
