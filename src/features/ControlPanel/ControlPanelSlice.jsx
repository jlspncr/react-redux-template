import { createSlice, combineReducers } from "@reduxjs/toolkit";

const initialState = {
	result: [],
	option: [],
	text: "",
	checkbox: false,
	slideSet: 1
};

const ControlPanelSlice = createSlice({
	name: "controls",
	initialState: initialState,
	reducers: {
		setOption(state, action) {
			const { index, newOpt } = action.payload;
			const panel = state;
			if (panel.option) {
				panel.option = newOpt;
			}
		},

		// setText
		setText(state, action) {
			const { index, newText } = action.payload;
			const panel = state;
			if (panel) {
				panel.text = newText;
			}
		},

		// toggleSelected
		toggleSelected(state, action) {
			const selected = action.payload;
			const panel = state;
			if (panel.checkbox) {
				panel.checkbox = !panel.checkbox;
			}
		}

		// setSlider

		// pubClick
	}
});

export const {
	setOption,
	setText,
	toggleSelected,
	setSlider,
	pubClick
} = ControlPanelSlice.actions;

export default ControlPanelSlice.reducer;
