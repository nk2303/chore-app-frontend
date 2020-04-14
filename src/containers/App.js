import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Landing from './Landing'
import Account from './Account'
import HouseContainer from './HouseContainer'
import background from '../assets/chalkboardbackground.jpg';


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
    };
  }

  login = data => {
    // const updatedState = { ...this.state.auth, user: {data.user} };
    localStorage.setItem("token", data.jwt);
    this.setState({ authUser: data.user });
  };

  
  render() {
      return (
        <div style={this.sectionStyle}>
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
