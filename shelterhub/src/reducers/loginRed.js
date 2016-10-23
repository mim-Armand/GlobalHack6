import { browserHistory } from 'react-router';



const loginRed = (state = {

}, action) => {
	switch ( action.type ) {
		case 'LOGIN_FORM':
		// console.log('Login red: ', action.payload, state)
			switch ( action.payload.actionType ) {
				case 'onUserTypeChange':
					return Object.assign({}, state, {
		                userType: action.payload.userType,
		                userTypeName: action.payload.userTypeName,
		            });
		        case 'onUserNameChanged':
		        	return Object.assign({}, state, {
		                userName: action.payload.userName,
		            });
	            case 'onPassChange':
	        	return Object.assign({}, state, {
	                password: action.payload.password,
	            });
	            case 'onLoginToggle':
	            browserHistory.push('/login');
	            return Object.assign({}, state, {
	            	loggedIn: false
	            })
	            case 'loggedIn':
	            return Object.assign({}, state, {
	            	loggedIn: true
	            })
			}
		default:
			return state
	}
};

export default loginRed;