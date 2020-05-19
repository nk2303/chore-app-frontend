import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { api } from '../services/api';
import NavBar from './NavBar';
import Landing from './Landing';
import About from './About'
import Account from './Account';
import HouseContainer from './HouseContainer';
import background from '../assets/recycling-texture.JPG';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faBroom, faDumpster, faTrash, faUtensilSpoon, faSeedling, faBath, faDrumstickBite, faHotdog, faLeaf, faPaw } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckCircle, faBroom, faDumpster, faTrash, faUtensilSpoon, faSeedling, faBath, faDrumstickBite, faHotdog, faLeaf, faPaw)
// library.add(fas, faCheckSquare, faCoffee)

// authUser gets looked up in database
// chores.filter(user == authUser).map((chore) => chore.day? send to Schedule : UserChores)

class App extends Component {
  sectionStyle = {
    backgroundImage: `url(${background})`,
    minHeight: '1000px',
    backgroundSize: 'cover'
  };

  constructor() {
    super();
    this.state = {
      authUser: {},
      location: {},
      users: [],
      chores: [],
      isAdmin: false,
      draggedChore: null
    };
  }

  isAdmin() {
    (this.state.location.creator === this.state.authUser.id) ?
      (this.setState({ isAdmin: true }))
      :
      (this.setState({ isAdmin: false }))
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
    this.setState({
      authUser: {},
      location: {},
      users: [],
      chores: [],
      isAdmin: false,
      draggedChore: null});
  };

  returningUser = data => {
    this.setState({ authUser: data.user })
  }

  setLocationInfo = data => {
    const { name, id, creator, users, chores } = data.location;
    this.setState({
      location: { name, id, creator },
      users,
      chores
    })
    this.isAdmin()
  }

  updateUser = data => {
    this.setState(prev => {
      return ({
        authUser: data.user,
        users: [...prev.users.filter(user => user.id !== prev.authUser.id), data.user],
      })
    })
    if (this.state.authUser.location_id === null) {
      this.setState({
        location: {},
        users: [],
        chores: [],
        isAdmin: false,
      })
    }
  }

  addChore = data => {
    this.setState(prev => {
      return ({
        chores: [...prev.chores, data.chore]
      })
    })
  }

  updateChore = data => {
    this.setState(prev => {
      return ({
        chores: [...prev.chores.filter(chore => chore.id !== data.chore.id), data.chore]
      })
    })
  }

  deleteChore = (deletedId) => {
    this.setState(prev => {
      return ({
        chores: prev.chores.filter(chore => chore.id !== deletedId)
      })
    })
  }

  onDragStart = (chore) => {
    this.setState({ draggedChore: chore });
  }

  onDrop = (day, user_id) => {
    api.chore.updateChore({ chore: { ...this.state.draggedChore, day, user_id } })
      .then(resp => {
        this.setState(prevState => ({
          draggedChore: null,
          chores: prevState.chores.map(chore => prevState.draggedChore.id === chore.id ? ({ ...chore, day, user_id }) : chore)
        }));
      })

  }

  render() {
    return (
      <div style={this.sectionStyle}>
        <Router>
          <NavBar handleLogout={this.logout} authUser={this.state.authUser} />
          <Route exact path='/' render={(props) => <Landing {...props}
            onLogin={this.login}
            onReturningUser={this.returningUser} />} />
          <Route exact path='/account' render={(props) => <Account {...props}
            handleLogout={this.logout}
            isAdmin={this.state.isAdmin}
            authUser={this.state.authUser}
            location={this.state.location}
            users={this.state.users}
            onUpdateUser={this.updateUser} />} />
          <Route exact path='/house' render={(props) => <HouseContainer {...props}
                                isAdmin={this.state.isAdmin}
                                authUser={this.state.authUser}
                                chores={this.state.chores}
                                users={this.state.users}
                                setLocationInfo={this.setLocationInfo}
                                onAddChore={this.addChore}
                                onCompleteChore={this.updateChore}
                                onDeleteChore={this.deleteChore}
                                onDragStart={this.onDragStart}
                                onDrop={this.onDrop} />
          }
          />
          <Route exact path='/about' render={(props) => <About {...props} isAdmin={this.state.isAdmin} authUser={this.state.authUser} location={this.state.location} users={this.state.users}/>}/>
        </Router>

      </div>
    );
  }
}

export default App;
