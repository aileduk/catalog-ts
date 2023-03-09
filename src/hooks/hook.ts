import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"

import type { RootState, AppDisatch } from "../store"

export const useAppDispatch = () => useDispatch<AppDisatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
