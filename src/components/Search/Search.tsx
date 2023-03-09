import React, { FC } from "react"

import { setSearch } from "../../store/shoes/shoes.slice"

import { useAppDispatch, useAppSelector } from "../../hooks/hook"

import { ReactComponent as SearchIcon } from "../../assets/images/icons/search.svg"

import styles from "./Search.module.scss"

const Search: FC = () => {
	const dispatch = useAppDispatch()
	const { search } = useAppSelector(state => state.shoes)

	const handleSearch = (value: string) => {
		dispatch(setSearch(value))
	}

	return (
		<div className={styles.container}>
			<input
				onChange={e => {
					handleSearch(e.target.value)
				}}
				value={search}
				type="text"
				placeholder="Введіть артикул..."
			/>
			<SearchIcon />
		</div>
	)
}

export default Search
