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
  <MenuItem key={1} value={1} primaryText="General public" />,
  <MenuItem key={2} value={2} primaryText="Continum Of Care" />,
];



const Login = ()=>{
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
	          // value={this.state.value}
	          // onChange={this.handleChange}
	          // floatingLabelText="Floating Label Text"
	          floatingLabelFixed={true}
	          hintText="Login as"
	        >
	          {items}
	        </SelectField><br/>
			<TextField
			hintText="User Name"
			floatingLabelText="Please Enter User Name"
			fullWidth={false}
			/><br/>
			<TextField
			hintText="Password"
			floatingLabelText="Please Enter Your Password"
			type="password"
			/>
	    <CardActions>
			<FlatButton
			  backgroundColor="#a4c639"
			  hoverColor="#ff6600"
			  icon={<ActionAndroid color={fullWhite} />}
			  // style={style}
			  tooltip="top-center"
			  tooltipPosition="top-center"
			/><br/>
	    </CardActions><br/><br/>
		</Card>
		)
}

export default Login;