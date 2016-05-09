import React from 'react';
import { createDevTools } from 'redux-devtools'; // 引入Redux-dev开发调试工具

//import Monitors
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


const ReduxDevTool = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={ false }>
    	<LogMonitor theme="tomorrow" />
    </DockMonitor>
);

export default ReduxDevTool;