import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';

const LOGIN_FORM = 'LOGIN_FORM';
const TOP_BAR = 'TOP_BAR';
const FIND_SHELTER = 'FIND_SHELTER';

////////////////////////////////////////////////////// FIND SHELTER
///

export const findShelter = ( payload ) => ({
		type: FIND_SHELTER,
		payload
	});
export function findShelterInit () {
	return function ( dispatch, getStatem ){
	return fetch(`http://52.52.143.69/clients`, {
                method: 'GET'
            }).then(response => {
                console.log('RESPONSE: ', response)
                if(!response.ok){
                    console.log(`Dude! Don\'t do this to me! ${response}`);
                    alert(`Dude! Don\'t do this to me! ${response}`);
                    return;
                    dispatch(findShelter({
                        status: 'failed'
                    }));
                }
                return response.json()
            }).then(json => {
            	console.log('JSON: ', json)
            	let listOfUsers = [];
            	let listOfUsersId = [];
            	let listOfUsersObj = [];
            	for (var i = json._embedded.clients.length - 1; i >= 0; i--) {
            		listOfUsers.push(json._embedded.clients[i].name)
            		listOfUsersId.push(json._embedded.clients[i].id)
            		listOfUsersObj.push(json._embedded.clients[i])
            	}
            	dispatch(findShelter({
            			actionType: 'FetchedListOfUsers',
            			listOfUsers: listOfUsers,
            			listOfUsersId: listOfUsersId,
            			listOfUsersObj: listOfUsersObj,
                    }));
            })	}
}
export function findShelterSubmit ( payload ) {
	return function ( dispatch, getStatem ){
		console.log( ' SuBmIt!! ');
	}
}


////////////////////////////////////////////////////// LOGIN
///
export const loginForm = ( payload ) => {
	return{
	    type: LOGIN_FORM,
	    payload
	}
};

export function loginFormSubmit ( payload ) {
    return function(dispatch, getState){
    	if(!getState().loginRed.loggedIn) browserHistory.push('/login');
    	if( // This is where the form validation would happen
    		getState().loginRed.userType === null ||
    		getState().loginRed.username === '' ||
    		getState().loginRed.password === ''
    		// false //TODO!
    		){
    		alert( 'DUDE!\nplease select a user type and enter the user name and password! ')
    		return;
    	}
            dispatch(loginForm({
                    isFetching: true,
                    ...payload
            }));

            return fetch(`http://52.52.143.69/login/${getState().loginRed.userTypeName}`, {
                method: 'POST',
                headers: {
				    // 'Accept': 'application/json',
				    'Content-Type': 'application/json'
				  },
				   body: JSON.stringify({
				    username: getState().loginRed.userName,
				    password: getState().loginRed.password,
				  })
            }).then(response => {
                console.log('RESPONSE: ', response)
                if(!response.ok){//TODO: needs work
                    console.log(`Dude! Don\'t do this to me! ${response}`);
                    alert(`Dude! Don\'t do this to me! ${response}`);
                    return;
                    dispatch(loginForm({
                        status: 'failed',
                        ...payload
                    }));
                }
                return response.json()
            }).then(json => {
            	console.log('JSON: ', json)
            	browserHistory.push('/findShelter');
            	dispatch(loginForm({
            			...payload,
            			actionType: 'loggedIn',
                        logedIn: true,
                    }));
            })
    }
}