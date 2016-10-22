


const loginRed = (state = {
	userType: null,
	userTypeName: null,
	userName: '',
	password:'',
	loggedIn: false
}, action) => {
	switch ( action.type ) {
		case 'LOGIN_FORM':
		console.log('Login red: ', action.payload, state)
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
			}
		default:
			return state
	}
};

export default loginRed;