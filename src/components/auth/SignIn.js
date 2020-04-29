import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
     }
     handleSubmit = (e) =>{
         e.preventDefault()
         this.props.signIn(this.state)
        //  console.log(this.state)
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value
         })
     }
    render() { 
        const {authError, auth, loading} = this.props
        if(auth.uid) return <Redirect to="/" />
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="">
                        <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                        </div>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-4 z-depth-0">
                        {loading && (
                            <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px", fontSize: "15px" }}
                            />
                        )}
                        {loading && <span>Login</span>}
                        {!loading && <span>Login</span>}
                        </button>
                    </div>
                </form>
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn : (creds) => dispatch(signIn(creds))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);