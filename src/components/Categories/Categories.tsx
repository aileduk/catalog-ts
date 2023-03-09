import React, { FC } from "react"

import { setFilter } from "../../store/shoes/shoes.slice"

import { useAppDispatch, useAppSelector } from "../../hooks/hook"

import styles from "./Сategories.module.scss"

const Categories: FC = () => {
	const dispatch = useAppDispatch()
	const { categories, filter } = useAppSelector(state => state.shoes)

	const handleFiltering = (value: string) => {
		dispatch(setFilter(value === filter ? null : value))
	}

	return (
		<div className={styles.container}>
			{categories.map(category => (
				<button
					className={filter === category ? `${styles.button} ${styles.active}` : styles.button}
					key={category}
					onClick={() => handleFiltering(category)}>
					{category}
				</button>
			))}
		</div>
	)
}

export default Categories
