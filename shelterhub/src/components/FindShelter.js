import {connect} from 'react-redux';
import { findShelter, findShelterInit, findShelterSubmit } from "../actions/";

import React from 'react';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/pageview';
import {fullWhite} from 'material-ui/styles/colors';
import bg2 from '../img/bg2.jpg';
import key_icon from '../img/key_icon.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import Toggle from 'material-ui/Toggle';
import RefreshIndicator from 'material-ui/RefreshIndicator';




const genderTypes = [
  <MenuItem key={0} value={0} primaryText="Not Known" />,
  <MenuItem key={1} value={1} primaryText="Female" />,
  <MenuItem key={2} value={2} primaryText="Male" />,
  <MenuItem key={3} value={3} primaryText="Others" />,
];


const raceTypes = [
  <MenuItem key={0} value={0} primaryText="Not Known" />,
  <MenuItem key={1} value={1} primaryText="American Indian or Alaska Native" />,
  <MenuItem key={2} value={2} primaryText="Asian" />,
  <MenuItem key={3} value={3} primaryText="Black or African American" />,
  <MenuItem key={4} value={4} primaryText="Native Hawaiian or Other Pacific Islander" />,
  <MenuItem key={5} value={5} primaryText="White" />,
  <MenuItem key={6} value={6} primaryText="Other" />,
];

const styles = {
	toggle: {
	maxWidth: 250,
	minHeight: 33,
    margin: "auto",
    marginTop: 12
  },
  submitBtn:{
  	minWidth: "100%",
  	// minHeight: 66
  },
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
}

const Spinner = ({ isLoading }) => {
	if( isLoading ){
		return (
			 <div style={styles.container}>
			    <RefreshIndicator
			      size={45}
			      left={0}
			      top={0}
			      loadingColor="#FF9800"
			      status="loading"
			      style={styles.refresh}
			    />
			  </div>)
	}else{
		return null;
	}
}

const FindShelterView = ({ 
	isLoading,
	listOfUsers,
	clientName,
	clientGender,
	clientRace,
	clientSocial,
	clientIsVetran,
	clientHasDisabilities,
	clientHasAddiction,
	clientHasChildren,
	clientIsPregnant,
	clientIsEmployed,
	onChange,
	onSubmit,
	onInit
	 })=>{
	if(listOfUsers.length < 1)onInit();
	return(
		<Card className="card">
	    <CardMedia
	      overlay={<CardTitle title="Finding a shelter" subtitle="Results will update to entered data" />}
	    ><Spinner isLoading={isLoading}/>
	      <img src={bg2} />
	    </CardMedia>
	    	<Divider/>
	    	<Divider/>
		    <AutoComplete
	          hintText="Enter the first and last name"
	          dataSource={listOfUsers}
	          onUpdateInput={()=>{console.log('YYYYYYYYYYYAY')}}
	          onNewRequest={()=>{console.log('Carrots..')}}
	          floatingLabelText="First name / Last name"
	          fullWidth={true}
	        />
	         <SelectField
	          value={clientGender}
	          onChange={(a,b)=>{onChange('clientGender', b)}}
	          // floatingLabelText="Floating Label Text"
	          floatingLabelFixed={true}
	          hintText="Gender"
	          fullWidth={true}
	        >
	          {genderTypes}
	        </SelectField>
	        <SelectField
	          value={clientRace}
	          onChange={(a,b)=>{onChange('clientRace', b)}}
	          // floatingLabelText="Floating Label Text"
	          floatingLabelFixed={true}
	          hintText="Race"
	          fullWidth={true}
	        >
	          {raceTypes}
	        </SelectField>
	        <TextField
			onChange={(a,b)=>{onChange('clientSocial', b)}}
			value={clientSocial}
			hintText="Social Security Number"
			floatingLabelText="Please Enter Clients Social Security Number"
			fullWidth={true}
			/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientIsVetran', b)}}
		      label="Is Client a Vetran ? "
		      style={styles.toggle}
		      toggled={clientIsVetran}
		    />

		    <Divider/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientHasDisabilities', b)}}
		      label="Has Client Disabilities ? "
		      style={styles.toggle}
		      toggled={clientHasDisabilities}
		    />

		    <Divider/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientHasAddiction', b)}}
		      label="Has History Of Addiction ? "
		      style={styles.toggle}
		      toggled={clientHasAddiction}
		    /><Divider/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientHasChildren', b)}}
		      label="Has Client Children ? "
		      style={styles.toggle}
		      toggled={clientHasChildren}
		    /><Divider/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientIsPregnant', b)}}
		      label="Is Client Pregnant ? "
		      style={styles.toggle}
		      toggled={clientIsPregnant}
		    /><Divider/>

			<Toggle
			  onToggle={(e,b)=>{onChange('clientIsEmployed', b)}}
		      label="Is Client Employed ? "
		      style={styles.toggle}
		      toggled={clientIsEmployed}
		    />

		    <CardActions>
			<FlatButton
			  backgroundColor="#a4c639"
			  hoverColor="#ff6600"
			  rippleColor="#00F"
			  icon={<ActionAndroid color={fullWhite} />}
			  // onTouchTap={onSubmit}
			  style={styles.submitBtn}
			/><Divider/>
	    </CardActions>

	    </Card>
		)
}



const mapStateToProps = (state) => ({
	isLoading: state.findShelterRed.isLoading,
	listOfUsers: state.findShelterRed.listOfUsers,
	clientName: state.findShelterRed.clientName,
	clientGender: state.findShelterRed.clientGender,
	clientRace: state.findShelterRed.clientRace,
	clientSocial: state.findShelterRed.clientSocial,
	clientIsVetran: state.findShelterRed.clientIsVetran,
	clientHasDisabilities: state.findShelterRed.clientHasDisabilities,
	clientHasAddiction: state.findShelterRed.clientHasAddiction,
	clientHasChildren: state.findShelterRed.clientHasChildren,
	clientIsPregnant: state.findShelterRed.clientIsPregnant,
	clientIsEmployed: state.findShelterRed.clientIsEmployed
});

const mapDispatchToProps = (dispatch) => ({
	onInit: ()=>{
		dispatch(findShelterInit())
	},
	onChange: (key, value) => {
		dispatch(findShelter({
			actionType: 'onChange',
			keyToChange: key,
			valueToChange: value
		}))
	},
	onSubmit: (payload) => {
		dispatch(findShelterSubmit({
			actionType: 'onSubmit', //TODO
		}))
	},
});

const FindShelter = connect(
	mapStateToProps,
	mapDispatchToProps
)(FindShelterView);






export default FindShelter;