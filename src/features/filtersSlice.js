import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios'

const initialState = {
	filtersServer: [
		{
			id: 1,
			price: '$20',
			type: 'oil',
			color: 'yellow'
		},
		{
			id: 2,
			price: '$10',
			type: 'scrub',
			color: 'red'
		},
		{
			id: 3,
			price: '$50',
			type: 'cream',
			color: 'red'
		}, {
			id: 4,
			price: '$20',
			type: 'cream',
			color: 'blue'
		},
		{
			id: 5,
			price: '$10',
			type: 'scrub',
			color: 'blue'
		},
		{
			id: 6,
			price: '$50',
			type: 'bottle',
			color: 'red'
		}, {
			id: 7,
			price: '$20',
			type: 'oil',
			color: 'green'
		},
		{
			id: 8,
			price: '$10',
			type: 'scrub',
			color: 'blue'
		},
		{
			id: 9,
			price: '$50',
			type: 'scrub',
			color: 'red'
		}, {
			id: 10,
			price: '$20',
			type: 'oil',
			color: 'pink'
		},
		{
			id: 11,
			price: '$10',
			type: 'scrub',
			color: 'blue'
		},
		{
			id: 12,
			price: '$50',
			type: 'bottle',
			color: 'green'
		},

		{
			id: 13,
			price: '$50',
			type: 'bottle',
			color: 'yellow'
		}, {
			id: 14,
			price: '$20',
			type: 'oil',
			color: 'pink'
		},
		{
			id: 15,
			price: '$10',
			type: 'scrub',
			color: 'red'
		},
		{
			id: 16,
			price: '$50',
			type: 'oil',
			color: 'blue'
		}, {
			id: 17,
			price: '$20',
			type: 'oil',
			color: 'green'
		},
		{
			id: 18,
			price: '$10',
			type: 'scrub',
			color: 'yellow'
		},
		{
			id: 19,
			price: '$50',
			type: 'oil',
			color: 'blue'
		}, {
			id: 20,
			price: '$20',
			type: 'oil',
			color: 'blue'
		},
		{
			id: 21,
			price: '$10',
			type: 'scrub',
			color: 'red'
		},
		{
			id: 22,
			price: '$50',
			type: 'bottle',
			color: 'water'
		},
		{
			id: 23,
			price: '$50',
			type: 'oil',
			color: 'water'
		},
		{
			id: 24,
			price: '$50',
			type: 'scrub',
			color: 'water'
		}, {
			id: 25,
			price: '$50',
			type: 'oil',
			color: 'red'
		},
	]
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		makeFilter: (state, action) => {

		}
	}
})

export default filtersSlice.reducer
export const { makeFilter } = filtersSlice.actions
export const getfiltersServer = (state) => state.filters.filtersServer