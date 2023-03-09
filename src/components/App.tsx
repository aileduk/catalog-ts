import React, { FC, useEffect } from "react"

import Catalog from "./Catalog/Catalog"
import Error from "./Error/Error"
import Preloader from "./Preloader/Preloader"

import { useAppDispatch, useAppSelector } from "../hooks/hook"

import { fetchShoes } from "../store/shoes/shoes.slice"

const App: FC = () => {
	const dispatch = useAppDispatch()

	const { status, error } = useAppSelector(state => state.shoes)

	useEffect(() => {
		dispatch(fetchShoes())
	}, [dispatch])

	return (
		<>
			{status === "loading" && <Preloader />}
			{status === "success" && <Catalog />}
			{error && status === "error" && <Error error={error} />}
		</>
	)
}

export default App
