import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Landing from './Landing'
import Account from './Account'
import HouseContainer from './HouseContainer'
import background from '../assets/chalkboardbackground.jpg';


// Routing between login (new user), account(user without a house) and house pages(user already belonging to a house)


function App() {
  var sectionStyle = {
    backgroundImage: `url(${background})`,
    'min-height': '800px',
    'background-size':'cover'
  };
  return (
    
    <div style={sectionStyle}>
      <Router>
        <NavBar/>
        <Route exact path='/' render={()=><Landing/>}/>
        <Route exact path='/account' render={()=><Account/>}/>
        <Route exact path='/house' render={()=><HouseContainer/>}/>
      </Router>

    </div>
  );
}

export default App;
