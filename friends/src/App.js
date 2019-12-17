import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import axios from "axios";
import AddFriend from "./components/AddFriend";

function App(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function onSubmit(form) {
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        setToken(response.data.payload);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <Route path="/" render={(props)=><NavBar token={token} {...props}/>}/>
      <Route path="/login" render={(props) => <LoginForm onSubmit={onSubmit} {...props}/>} />
      <PrivateRoute path="/friends" component={FriendsList} />
      <PrivateRoute path="/add_friend" component={AddFriend} />
    </div>
  );
}

export default App;
