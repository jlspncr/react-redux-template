import { createSlice, combineReducers } from "@reduxjs/toolkit";

const initialState = [
	{
		resDisplay: {},
		option: ["Option #1", "Option #2", "Option #3"],
		optVal: "Option #1",
		text: "Hello There",
		checkbox: false,
		slideSet: 1
	}
];

const ControlPanelSlice = createSlice({
	name: "controls",
	initialState: initialState,
	reducers: {
		setOption(state, action) {
			const { index, newOpt } = action.payload;
			const panel = state[index];
			if (panel) {
				panel.optVal = newOpt;
			}
		},

		// setText
		setText(state, action) {
			const { index, newText } = action.payload;
			const panel = state[index];
			if (panel) {
				panel.text = newText;
			}
		},

		// toggleSelected
		toggleSelected(state, action) {
			const { index, selected } = action.payload;
			const panel = state[index];
			if (panel) {
				panel.checkbox = !panel.checkbox;
			}
		},

		// setSlider
		setSlider(state, action) {
			const { index, selected } = action.payload;
			const panel = state[index];
			if (panel) {
				panel.slideSet = selected;
			}
		},

		// pubClick
		pubClick(state, action) {
			const { index } = action.payload;
			const panel = state[index];
			if (panel) {
				panel.resDisplay = {
					Select: panel.optVal,
					Text: panel.text,
					Checkbox: panel.checkbox,
					Slider: panel.slideSet
				};
			}
		}
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
