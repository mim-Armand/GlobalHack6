import { combineReducers } from 'redux';
import loginRed from './loginRed';



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
})

export default AppReducer;