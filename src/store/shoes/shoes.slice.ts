import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { TCards } from "../../types/shoesTypes"

const BASE_URL = "https://63f6aa1c59c944921f77a0fc.mockapi.io/shoes"

export const fetchShoes = createAsyncThunk<TCards[], undefined, { rejectValue: string }>(
	"shoes/fetchShoes",
	async function (_, { rejectWithValue }) {
		const response = await axios.get(BASE_URL)

		if (response.status !== 200) {
			return rejectWithValue("Server error!")
		}
		return response.data
	}
)

type TShoesState = {
	cards: TCards[]
	categories: string[]
	error: null | undefined | string
	filter: null | string
	search: string
	status: null | string
}

const initialState: TShoesState = {
	cards: [],
	categories: [],
	error: null,
	filter: null,
	search: "",
	status: null,
}

const shoesSlice = createSlice({
	name: "shoes",
	initialState,
	reducers: {
		setActiveSize(state, actions: PayloadAction<{ name: string; size: string }>) {
			const { name, size } = actions.payload

			state.cards = state.cards.map(item => {
				if (item.name === name) {
					return { ...item, activeSize: size }
				}
				return item
			})
		},
		setFilter(state, actions: PayloadAction<string | null>) {
			state.filter = actions.payload
		},
		setSearch(state, actions: PayloadAction<string>) {
			state.search = actions.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchShoes.pending, state => {
			state.status = "loading"
		})
		builder.addCase(fetchShoes.fulfilled, (state, actions) => {
			state.cards = actions.payload.map(item => ({
				...item,
				activeSize: item.sizestock[0]?.size,
			}))
			state.categories = actions.payload.reduce((acc: string[], cur) => {
				return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
			}, [])
			state.status = "success"
		})
		builder.addCase(fetchShoes.rejected, (state, actions) => {
			state.error = actions.payload
			state.status = "error"
		})
	},
})

export default shoesSlice.reducer
export const { setActiveSize, setFilter, setSearch } = shoesSlice.actions
