import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state = { 
        email: '',
        password: '',
        firstName: '',
        lastName: ''
     }
     handleSubmit = (e) =>{
         e.preventDefault()
        //  console.log(this.state)
          this.props.signUp(this.state)
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value
         })
     }
    render() { 
        const {auth, authError, loading} = this.props
        if(auth.uid) return <Redirect to="/" />
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-4 z-depth-0">
                        {loading && (
                            <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px", fontSize: "15px" }}
                            />
                        )}
                        {loading && <span>Sign Up</span>}
                        {!loading && <span>Sign Up</span>}
                        </button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);