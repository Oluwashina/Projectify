import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'


class Navbar extends Component {
    render() { 
        const {auth, profile} = this.props;
        console.log(auth)
        const links  = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
        return ( 
            <React.Fragment>
            <nav className="nav-wrapper blue darken-4">
                <div className="container">
                <Link to="/" className="brand-logo">Projectify</Link>
                    {links}
                </div>
            </nav>
         </React.Fragment>
         );
    }
}


const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);