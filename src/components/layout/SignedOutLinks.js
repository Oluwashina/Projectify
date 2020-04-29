import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from 'materialize-css'

class SignedOutLinks extends Component {
  state = {

  };
  componentDidMount(){
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {
        draggable: true
    });
   
 }

 
  render() {
    return (
      <React.Fragment>
          {/* hamburger trigger */}
        <a href="/#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
        </ul>

        {/* mobile menu list */}
        <ul id="slide-out" className="sidenav sidenav-close">
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default SignedOutLinks;
