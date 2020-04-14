import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Landing from './Landing'
import Account from './Account'
import HouseContainer from './HouseContainer'

// Routing between login (new user), account(user without a house) and house pages(user already belonging to a house)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authUser: {},
    };
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   console.log(token)
  //   if (token) {
  //     // console.log('there is a token');
  //     // make a request to the backend and find our user
  //     api.auth.getCurrentUser().then(user => {
  //       // console.log(user)
  //       const updatedState = { ...this.state.auth, user: user };
  //       this.setState({ auth: updatedState });
  //     });
  //   }
  // }

  login = data => {
    // const updatedState = { ...this.state.auth, user: {data.user} };
    localStorage.setItem("token", data.jwt);
    this.setState({ authUser: data.user });
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
