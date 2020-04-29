import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
import {connect}  from 'react-redux';
import {signOut} from '../../store/actions/authActions'
import M from 'materialize-css'

class SignedInLinks extends Component {
    state = { 

     };
     componentDidMount(){
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
     }
    render() { 
        return ( 
            <React.Fragment>
            {/* hamburger trigger */}
          <a href="/#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
  
  
          <ul className="right">
             <li className="hide-on-med-and-down"><NavLink to="/">Home</NavLink></li>
              <li className="hide-on-med-and-down"><NavLink to="/create">New Project</NavLink></li>
              <li className="hide-on-med-and-down"><a href="/#" onClick={this.props.signOut}>Log Out</a></li>
              <li><NavLink to="/" className="btn btn-floating pink lighten-1">{this.props.profile.initials}</NavLink></li>
          </ul>
  
          {/* mobile menu list */}
          <ul id="slide-out" className="sidenav sidenav-close">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/create">New Project</NavLink></li>
              <li><a href="/#" onClick={this.props.signOut}>Log Out</a></li>
          </ul>
          </React.Fragment>
         );
    }
}
 


const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
} 

export default connect(null,mapDispatchToProps)(SignedInLinks);