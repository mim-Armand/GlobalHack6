

const findShelterRed = (state={
	isLoading: true,
	listOfUsers: [],
	clientName: '',
	clientGender: null,
	clientRace: null,
	clientSocial: '',
	clientIsVetran: false,
	clientHasDisabilities: false,
	clientHasAddiction: false,
	clientHasChildren: false,
	clientIsPregnant: false,
	clientIsEmployed: false,
	sheltersData: []
}, action) => {
	switch( action.type ) {
		case 'FIND_SHELTER':
		console.log('FIND_SHELTER', state, action);
		if(action.payload.actionType === 'onChange'){
			return Object.assign({}, state, {
				[action.payload.keyToChange]: action.payload.valueToChange
			})
		}else if( action.payload.actionType === 'FetchedListOfUsers' ){
			return Object.assign({}, state, {
				...action.payload,
				listOfUsersObj: action.payload.listOfUsersObj,
				listOfUsers: action.payload.listOfUsers,
				listOfUsersId: action.payload.listOfUsersId
			})
		}
		return Object.assign({}, state, {
			...action.payload
		})
		default:
			return state;
	}
}

export default findShelterRed;