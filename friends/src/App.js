import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Route path = "/">
        <LoginForm/>
      </Route>
    </div>
  );
}

export default App;
