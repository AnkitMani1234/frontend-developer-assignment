import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import TrackingScreen from './components/TrackingScreen';
import './assets/styles/App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/tracking" component={TrackingScreen} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
