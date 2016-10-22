import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const TopBar = ()=>{
	return(
		 <AppBar
          title={<span>Shelter Hub.</span>}
          // iconClassNameRight="icon-navigation-expand-more"
          onTitleTouchTap={handleTouchTap}
          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
        )
}

export default TopBar;