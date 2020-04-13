import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../components/Login'
import HouseContainer from './HouseContainer'

// Routing between signup, login, and landing pages


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' render={()=><Login/>}/>
        <Route exact path='/house' render={()=><HouseContainer/>}/>
      </Router>

    </div>
  );
}

export default App;
