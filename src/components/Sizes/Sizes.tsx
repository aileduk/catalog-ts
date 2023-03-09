import React, { FC } from "react"

import { setActiveSize } from "../../store/shoes/shoes.slice"

import { useAppDispatch } from "../../hooks/hook"

import { TSizestock } from "../../types/shoesTypes"

import styles from "./Sizes.module.scss"

interface SizesProps {
	sizestock: TSizestock[]
	activeSize: string | undefined
	name: string
}

const Sizes: FC<SizesProps> = ({ sizestock, activeSize, name }) => {
	const dispatch = useAppDispatch()

	return (
		<>
			{sizestock.map(item => (
				<button
					className={activeSize === item.size ? `${styles.button} ${styles.active}` : styles.button}
					key={item.size}
					onClick={() => dispatch(setActiveSize({ name: name, size: item.size }))}>
					{item.size}
				</button>
			))}
		</>
	)
}

export default Sizes
