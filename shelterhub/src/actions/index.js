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
	console.log('here')
    return function(dispatch, getState){

            // dispatch(loginForm({
            //         status: 'fetching',
            //         showLoading: true,
            //         loadingMessage: 'Loading...',
            //         loadingMessage2: 'Getting the list of users...',
            //         isFetching: true,
            //         rootAccountAlias: authorization.rootAccountAlias,
            //         bearerToken: authorization.token,
            //         data: [],
            //         ...payload
            // }));

            return fetch(`/login/${getState.loginRed.userTypeName}/relationships/azure/users`, {
                data: "json",
                method: 'GET',
                headers: {
                    Authorization: (`Bearer`)
                }
            }).then(response => {
                console.log('RESPONSE: ', response)
                if(!response.ok){//TODO: needs work
                    alert('Not 200, needs implementation (out of scope) <- according to the .status code react appropriately..', response);
                    dispatch(loginForm({
                        status: 'failed',
                        ...payload
                    }));
                }
                return response.json()
            }).then(json => {
            	console.log('JSON: ', json)
            	dispatch(loginForm({
                        logedIn: true,
                        ...payload
                    }));
            })
    }
}