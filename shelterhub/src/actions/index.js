import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';

const LOGIN_FORM = 'LOGIN_FORM';


export const loginForm = ( payload ) => {
	return{
	    type: LOGIN_FORM,
	    payload
	}
};

export function loginFormSubmit ( payload ) {
    return function(dispatch, getState){

    	if( // This is where the form validation would happen
    		getState().loginRed.userType === null ||
    		getState().loginRed.username === '' ||
    		getState().loginRed.password === ''
    		){
    		alert( 'DUDE!\nplease select a user type and enter the user name and password! ')
    		return;
    	}
            dispatch(loginForm({
                    isFetching: true,
                    ...payload
            }));

            return fetch(`https://jsonplaceholder.typicode.com/users`, {
                data: "json",
                method: 'GET',
                headers: {
                    Authorization: (`test`)
                }
            }).then(response => {
                console.log('RESPONSE: ', response)
                if(!response.ok){//TODO: needs work
                    alert(`Dude! Don\'t do this to me! ${response}`);
                    dispatch(loginForm({
                        status: 'failed',
                        ...payload
                    }));
                }
                return response.json()
            }).then(json => {
            	console.log('JSON: ', json)
            	browserHistory.push('/provider');
            	dispatch(loginForm({
                        logedIn: true,
                        ...payload
                    }));
            })
    }
}