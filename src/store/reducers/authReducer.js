const initState = {
    authError: null,
    loading: false
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Invalid Credentials',
                loading: false
            }
        case 'SIGNIN_LOADER':
            return{
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS' :
            console.log('Login successfully')
            return{
                ...state,
                loading: false,
                authError: null
            }
        case 'SIGNUP_LOADER':
            return{
                ...state,
                loading: true
            }
        case 'SIGNOUT_SUCCESS' :
            console.log('signout success')
            return state
        case 'SIGNUP_SUCCESS' :
            console.log('signup success')
            return{
                ...state,
                loading: false,
                authError: null
            }
        case 'SIGNUP_ERROR' :
            console.log('signup error')
            return{
                ...state,
                loading: false,
                authError: action.err.message 
            }
        default: 
            return state
    }
}

export default authReducer