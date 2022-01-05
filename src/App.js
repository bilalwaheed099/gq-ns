import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Course from './Components/Dashboard/Course';
import Profile from './Components/Dashboard/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/course" exact>
            <Course />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
