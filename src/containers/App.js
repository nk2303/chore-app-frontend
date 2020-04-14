import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { api } from '../services/api';
import NavBar from './NavBar';
import Landing from './Landing';
import Account from './Account';
import HouseContainer from './HouseContainer';
import background from '../assets/recycling-texture.JPG';


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

  render() {
      return (
        <div style={this.sectionStyle}>
          <Router>
            <NavBar/>
            <Route exact path='/' render={(props)=><Landing {...props} onLogin={this.login} onReturningUser={this.returningUser} />}/>
            <Route exact path='/account' render={(props)=><Account {...props} authUser={this.state.authUser} />}/>
            <Route exact path='/house' render={(props)=><HouseContainer {...props} authUser={this.state.authUser} />}/>
          </Router>
    
        </div>
      );
    }
  }

export default App;
