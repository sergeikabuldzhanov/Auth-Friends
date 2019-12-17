import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({token, history}) {
  return (
    <nav className="navbar">
      {token ? (
        <NavLink
          className="navlink"
          to="/login"
          onClick={() => {
              localStorage.removeItem("token");
              history.push('/login');
            }}
        >
          Log out
        </NavLink>
      ) : (
        <NavLink className="navlink" to="/login">
          Log in
        </NavLink>
      )}
      <NavLink className="navlink" to="/friends">
        Friend List
      </NavLink>
    </nav>
  );
}
