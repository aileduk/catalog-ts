import { combineReducers } from "@reduxjs/toolkit"

import shoesSlice from "./shoes/shoes.slice"

export const rootReducer = combineReducers({
	shoes: shoesSlice,
})
