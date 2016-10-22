import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import AppReducer from './reducers';
import { Router, Route, Link, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import DevTools from './components/DevTools';




import App from './App';
import Login from './components/Login';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const loggerMiddleware = createLogger();
const enhancers = compose( // This is the same compose as found in Underscore or lodash, it will compose all our store enhancers in to one
    applyMiddleware(
		thunkMiddleware // dispatch() functions
		// loggerMiddleware, // logs actions
	),
    // DevTools.instrument() //TODO: We need to implement a mechanism so dev-tools will be added only in DEV env. (maybe using envify?) <-- check the redux-dev-tools docs
    // persistState(getDebugSessionKey())
);


const history = browserHistory;

let store = createStore(AppReducer);

browserHistory.push('/login');

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/login" component={Login}/>
				<Route path="/app" />
			</Route>
		</Router>
	</Provider>
  ,
  document.getElementById('root')
);
