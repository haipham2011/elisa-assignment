import { combineReducers } from "redux";
import channels from './channelReducer';
import programs from './programReducer';

export default combineReducers({ channels, programs });