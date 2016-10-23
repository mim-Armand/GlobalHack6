import {connect} from 'react-redux';
import { loginForm, loginFormSubmit } from "../actions/";

import React from 'react';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/communication/vpn-key';
import {fullWhite} from 'material-ui/styles/colors';
import bg1 from '../img/bg1.jpg';
import key_icon from '../img/key_icon.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={0} value={0} primaryText="user" />,
  <MenuItem key={1} value={1} primaryText="provider" />,
];



const LoginView = ({onSubmit, onUserTypeChange, onUserNameChanged, userType,  userName, userTypeName, password, onPassChange})=>{
	return(
		<Card className="card">
		 <CardHeader
	      title="Hello there!"
	      subtitle="Welcome to ShelterHub.."
	      avatar={key_icon}
	    />
	    <CardMedia
	      overlay={<CardTitle title="Login" subtitle="As general public or COC" />}
	    >
	      <img src={bg1} />
	    </CardMedia>
	    <br/>
		    <SelectField
	          value={userType}
	          onChange={onUserTypeChange}
	          // floatingLabelText="Floating Label Text"
	          floatingLabelFixed={true}
	          hintText="Login as"
	        >
	          {items}
	        </SelectField><br/>
			<TextField
			onChange={onUserNameChanged}
			value={userName}
			hintText="User Name"
			floatingLabelText="Please Enter User Name"
			fullWidth={false}
			/><br/>
			<TextField
			onChange={onPassChange}
			value={password}
			hintText="Password"
			floatingLabelText="Please Enter Your Password"
			type="password"
			/>
	    <CardActions>
			<FlatButton
			  backgroundColor="#a4c639"
			  hoverColor="#ff6600"
			  rippleColor="#00F"
			  icon={<ActionAndroid color={fullWhite} />}
			  onTouchTap={onSubmit}
			  // style={style}
			  // tooltip="top-center"
			  // tooltipPosition="top-center"
			/><br/>
	    </CardActions><br/><br/>
		</Card>
		)
}

const mapStateToProps = (state) => ({
	userType: state.loginRed.userType,
	userTypeName: state.loginRed.userTypeName,
	userName: state.loginRed.userName,
	password: state.loginRed.password
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: () => {
		dispatch(loginFormSubmit({
			actionType: 'onSubmit', //TODO
		}))
	},
	onUserTypeChange: (element, key) => {
		console.log('good!', key)
		dispatch(loginForm({
			actionType: 'onUserTypeChange',
			userType: key,
			userTypeName: element.target.innerHTML
		}))
	},
	onUserNameChanged: (element) => {
		dispatch(loginForm({
			actionType: 'onUserNameChanged',
			userName: element.target.value
		}))
	},
	onPassChange: (element) => {
		dispatch(loginForm({
			actionType: 'onPassChange',
			password: element.target.value
		}))
	}
});

const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginView);


export default Login;