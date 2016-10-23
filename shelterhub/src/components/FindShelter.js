import {connect} from 'react-redux';
import { findShelter, findShelterInit, findShelterSubmit, fillTheForm } from "../actions/";

import React from 'react';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/pageview';
import {fullWhite} from 'material-ui/styles/colors';
import bg2 from '../img/bg2.jpg';
import bg3 from '../img/bg5.jpg';
import key_icon from '../img/key_icon.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import Toggle from 'material-ui/Toggle';
import RefreshIndicator from 'material-ui/RefreshIndicator';



import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/notification/airline-seat-flat';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, red500} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';




const genderTypes = [
  <MenuItem key={1} value={"MALE"} primaryText="MALE" />,
  <MenuItem key={2} value={"FEMALE"} primaryText="FEMALE" />,
  <MenuItem key={3} value={"UNDISCLOSED"} primaryText="UNDISCLOSED" />,
];


const raceTypes = [
  <MenuItem key={0} value={"ASIAN"} primaryText="ASIAN" />,
  <MenuItem key={1} value={"CAUCASIAN"} primaryText="CAUCASIAN" />,
  <MenuItem key={2} value={"AFRICAN_AMERICAN"} primaryText="AFRICAN_AMERICAN" />,
  <MenuItem key={3} value={"AMERICAN_INDIAN"} primaryText="AMERICAN_INDIAN" />,
  <MenuItem key={4} value={"HISPANIC"} primaryText="HISPANIC" />,
  <MenuItem key={5} value={"OTHER"} primaryText="OTHER" />,
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
	sheltersData,
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
	onInit,
	onAutocompSelected,
	currentClient
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
	          onNewRequest={(name,index)=>{onAutocompSelected(name, index)}}
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
    	<Results data={sheltersData}/>
	    </Card>
		)
}


const Results = ({data})=>{
	return(
		<Card className="card">
	    <CardMedia
	      overlay={<CardTitle title="Results" subtitle="Available shelters in the area" />}
	    ><Spinner isLoading={false}/>
	      <img src={bg3} />
	    </CardMedia>
	    	<Divider/>
		     <List>
		     {data.map(function(shelterData, i){
		     	console.log('shelterData', shelterData)
		     	var clr = ((shelterData.name=='St. Patricks') ? blue500 : red500 )
		     	return(
		     		<ListItem
		     			key={i}
				        leftAvatar={<Avatar icon={<FileFolder />}
				        			backgroundColor={clr}/>}
				        rightIcon={<ActionInfo />}
				        primaryText={shelterData.name}
				        secondaryText={shelterData.address}
				      />
				      )
			    })}
    </List>
    <Divider inset={true} />
		    <CardActions>
		      <FlatButton label="More!" />
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
	clientIsEmployed: state.findShelterRed.clientIsEmployed,
	currentClient: state.findShelterRed.currentClient,
	sheltersData: state.findShelterRed.sheltersData,
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
		dispatch(findShelterSubmit({
			actionType: 'onSubmit', //TODO
		}))
	},
	onAutocompSelected: (name, index)=>{
		dispatch(fillTheForm(name, index))
		dispatch(findShelterSubmit({
			actionType: 'onSubmit', //TODO
		}))
	},
	onSubmit: (payload) => {
		console.log('SUBBBBB')
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