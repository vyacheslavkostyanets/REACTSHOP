import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	value: {
		items: [],
		status: null
	},
}

export const productFetch = createAsyncThunk("products/productFetch",
	async () => {
		const response = await axios.get("http://localhost:7000/products");
		console.log(response, 'response?.data')
		return response?.data
	},
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
	extraReducers: {
		[productFetch.pending]: (state, action) => {
			state.value.status = "pending"
		},
		[productFetch.fulfilled]: (state, action) => {
			state.value.status = "success";
			state.value.items = action.payload;
		},
		[productFetch.rejected]: (state, action) => {
			state.value.status = "rejected"
		},
	},
})

export default productsSlice.reducer