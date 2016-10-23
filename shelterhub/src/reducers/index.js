import { combineReducers } from 'redux';
import loginRed from './loginRed';
import findShelterRed from './findShelterRed';



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
	findShelterRed,
})

export default AppReducer;