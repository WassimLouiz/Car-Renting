import {React,Component} from 'react';
import Navbar from './component/NavBar';
import NewNavbar from './component/NewNavBar';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import './component/about.css';
import './component/contact.css';
import './component/search.css';
import './component/footer.css';
import Login from './component/Login';
import Register from './component/Register';
import Search from './component/search'
import firebase from './util/Firebase';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {

  return (
  <Router>
    <div>
      {this.state.user ? (<div><NewNavbar/> <Search/></div>):(<div><Navbar/></div>)}
      <hr />
      
      <Switch>
        <Route exact path='/' component={Search}  />  
        <Route  path='/Login' component={Login}  />  
        <Route  path='/Register' component={Register}  />  

      </Switch>
      
      
      
    </div>
    
  </Router>
);

}
}

export default App;