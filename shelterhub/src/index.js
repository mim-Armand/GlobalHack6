import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './App';
import Login from './components/Login';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


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
