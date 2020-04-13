import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../components/Login'
import HouseContainer from './HouseContainer'

// Routing between login (new user), account(user without a house) and house pages(user already belonging to a house)



function App() {
  return (
    <div>
      <Router>
      {/* NavBar */}
      
        <Route exact path='/' render={()=><Login/>}/>



        <Route exact path='/house' render={()=><HouseContainer/>}/>
      </Router>

    </div>
  );
}

export default App;
