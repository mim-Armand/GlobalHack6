import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import { loginForm } from "../actions/";


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const TopBarView = ({loggedIn, onLoginToggle})=>{
	if(loggedIn) {return(
		<AppBar
		title={<span>Shelter Hub.</span>}
		// iconClassNameRight="icon-navigation-expand-more"
		onTitleTouchTap={handleTouchTap}
		// iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		iconElementRight={<FlatButton label='Log-Out' />}
		onRightIconButtonTouchTap={onLoginToggle}
		/>
	        )}else{
		return(
			<AppBar
		title={<span>Shelter Hub.</span>}
		// iconClassNameRight="icon-navigation-expand-more"
		onTitleTouchTap={handleTouchTap}
		// iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		onRightIconButtonTouchTap={onLoginToggle}
		/>
			)
	}
}


const mapStateToProps = (state) => {
	return ({
	loggedIn: state.loginRed.loggedIn
})};

const mapDispatchToProps = (dispatch) => ({
	onLoginToggle: () => {
		dispatch(loginForm({
			actionType: 'onLoginToggle'
		}))
	}
});

const TopBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(TopBarView);

export default TopBar;