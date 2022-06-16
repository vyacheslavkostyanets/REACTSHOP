import { createSlice } from '@reduxjs/toolkit'

const searchDataSlice = createSlice({
	name: 'searchText',
	initialState: {
		value: "",
	},
	reducers: {
		changeInputValueData: (state, action) => {
			state.value = action.payload
		}
	}
})

export default searchDataSlice.reducer
export const { changeInputValueData } = searchDataSlice.actions
export const inputText = (state) => state.searchText.value




