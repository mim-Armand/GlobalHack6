import { combineReducers } from 'redux';

const emptyRed = (state = null, action) => {
	const {
		type,
		error
	} = action

	return state
};

const AppReducer = combineReducers({
	emptyRed
})

export default AppReducer;