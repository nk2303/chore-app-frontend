import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Landing from './Landing';
import Account from './Account';
import HouseContainer from './HouseContainer';
import { api } from '../services/api';

// Routing between login (new user), account(user without a house) and house pages(user already belonging to a house)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authUser: {},
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

  


  render() {
      return (
        <div>
          <Router>
            <NavBar/>
            <Route exact path='/' render={(props)=><Landing {...props} onLogin={this.login} />}/>
            <Route exact path='/account' render={()=><Account />}/>
            <Route exact path='/house' render={()=><HouseContainer/>}/>
          </Router>
    
        </div>
      );
    }
  }

export default App;
