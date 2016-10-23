

const findShelterRed = (state={
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
	clientIsEmployed: false
}, action) => {
	switch( action.type ) {
		case 'FIND_SHELTER':
		console.log('FIND_SHELTER', state, action);
		return Object.assign({}, state, {
			//TODO
		})
		default:
			return state;
	}
}

export default findShelterRed;