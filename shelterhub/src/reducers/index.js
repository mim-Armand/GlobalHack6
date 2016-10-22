import { combineReducers } from 'redux';
import loginRed from './loginRed';

const initialState = {
	loginRed:{
	userType: null,
	userTypeName: null,
	userName: 'test'
	}
}

const emptyRed = (state = null, action) => {
	const {
		type,
		error
	} = action

	return state
};

const AppReducer = combineReducers({
	emptyRed,
	loginRed,
	initialState,
})

export default AppReducer;