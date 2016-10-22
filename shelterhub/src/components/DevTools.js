import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor'; //https://github.com/calesce/redux-slider-monitor
//import DiffMonitor from 'redux-devtools-diff-monitor'; //https://github.com/whetstone/redux-devtools-diff-monitor
//import FilterableLogMonitor  from 'redux-devtools-filterable-log-monitor'; // https://github.com/bvaughn/redux-devtools-filterable-log-monitor/
//import Chartmonitor from 'redux-devtools-chart-monitor';  //https://github.com/romseguy/redux-devtools-chart-monitor
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

const actionCreators = {
    loadingFS() {
	    return {
		    type: 'TOGGLE_FS_LOADING',
			payload: {
				showLoadingFS: true,
				loadingFSText1: 'Dispatched from dev tools!',
				loadingFSText2: 'Everything looks fine!'
			}
		};
    },
    HIDE_loadingFS() {
        return {
    	    type: 'TOGGLE_FS_LOADING',
    	    payload: {
    		    showLoadingFS: false
    	    }
        };
    },
    nested: {
        loadingFS() {
            return {type: 'TOGGLE_FS_LOADING', payload: {showLoadingFS: true, loadingFSText1: 'cool!'}};
        },
    },
};

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey='ctrl-b'
					changePositionKey='ctrl-q'
	                defaultIsVisible={false}
	                defaultSize={0.33}>
		<MultipleMonitors>
			<LogMonitor theme='solarized' />
			<Dispatcher actionCreators={actionCreators} theme='solarized'/>
            <SliderMonitor/>
		</MultipleMonitors>
	</DockMonitor>
);

export default DevTools;