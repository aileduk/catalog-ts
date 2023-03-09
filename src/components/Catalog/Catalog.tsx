import React, { FC } from "react"

import Cards from "../Cards/Cards"
import Categories from "../Categories/Categories"
import ScrollButton from "../ScrollButton/ScrollButton"
import Search from "../Search/Search"

import styles from "./Сatalog.module.scss"

const Catalog: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Categories />
				<Search />
			</div>
			<Cards />
			<ScrollButton />
		</div>
	)
}

export default Catalog
