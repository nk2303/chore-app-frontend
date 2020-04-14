import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Landing from './Landing'
import Account from './Account'
import HouseContainer from './HouseContainer'
import ChoreDetail from '../components/ChoreDetail'

// Routing between login (new user), account(user without a house) and house pages(user already belonging to a house)



class App extends Component {
  state = {
    showChore: null
  }

  renderChoreDetail = (chore) => {
    this.setState({
      showChore: chore
    })
  }
  handleDisplay = () => {
    if (this.state.showChore!==null){
      return <ChoreDetail chore={this.state.showChore}/>
    }
    else {
      return <div>
      <Router>
        <NavBar/>
        <Route exact path='/' render={()=><Landing/>}/>
        <Route exact path='/account' render={()=><Account/>}/>
        <Route exact path='/house' render={()=><HouseContainer showChoreDetail={this.renderChoreDetail}/>}/>
      </Router>
    </div>
    }
  }

  render(){

    const mainPage = 
         <div>
          <Router>
            <NavBar/>
            <Route exact path='/' render={()=><Landing/>}/>
            <Route exact path='/account' render={()=><Account/>}/>
            <Route exact path='/house' render={()=><HouseContainer showChoreDetail={this.renderChoreDetail}/>}/>
          </Router>
        </div>;
    
    
    

    return (

      this.handleDisplay()
    );
  }
}

export default App;
