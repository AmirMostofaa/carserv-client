import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext()

function App() {

const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        
        <Header/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/admin">
          <Admin/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>


      </Switch>
      <Footer/>
      </Router>
      
      
    </UserContext.Provider>
  );
}

export default App;
