import { combineReducers } from "redux";

import ControlPanelReducer from "../features/ControlPanel/ControlPanelSlice";

export default combineReducers({
	controls: ControlPanelReducer
});
