import React, { FC, useState } from "react"

import Buyers from "../Buyers/Buyers"
import Modal from "../Modal/Modal"
import Sizes from "../Sizes/Sizes"
import NotAvailable from "../NotAvailable/NotAvailable"

import { TCards } from "../../types/shoesTypes"

import styles from "./CardItem.module.scss"

interface CardProps {
	card: TCards
}

const Card: FC<CardProps> = ({ card }) => {
	const { name, category, img, description, price, sizestock, activeSize } = card

	const [modalActive, setModalActive] = useState<boolean>(false)

	const toggleModal = () => {
		setModalActive(prev => !prev)
		document.body.classList.toggle("open")
	}

	const activeSizeInfo = sizestock.find(item => {
		return item.size === activeSize
	})

	const categoryToRender = category ? category : "Взуття"
	const sizesToRender = sizestock.length ? (
		<Sizes activeSize={activeSize} sizestock={sizestock} name={name} />
	) : (
		<NotAvailable />
	)
	const priceToRender = price ? price : "0"
	const stockToRender = sizestock.length ? activeSizeInfo?.stock : "0"
	const reservToRender = sizestock.length ? activeSizeInfo?.reserv : "0"
	const buyersToRender =
		sizestock.length && activeSizeInfo && activeSizeInfo?.reserv !== "0" ? (
			<Buyers activeSizeInfo={activeSizeInfo} />
		) : null

	return (
		<div className={styles.container}>
			<div className={styles.name}>{name}</div>
			<div className={styles.category}>{categoryToRender}</div>
			<div className={styles.image}>
				<img src={img} alt={category} onClick={() => toggleModal()} />
				<Modal img={img} active={modalActive} toggleModal={toggleModal} />
			</div>
			<div className={styles.sizes}>{sizesToRender}</div>
			<div className={styles.description}>{description}</div>
			<div className={styles.info}>
				<div className={styles.infoBlock}>
					<div className={styles.infoTitle}>Стоимость</div>
					<div className={styles.infoUnits}>{priceToRender} ₴</div>
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.infoTitle}>В наличии</div>
					<div className={styles.infoUnits}>{stockToRender} шт.</div>
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.infoTitle}>Броней</div>
					<div className={styles.infoUnits}>{reservToRender} шт.</div>
				</div>
			</div>
			{buyersToRender}
		</div>
	)
}

export default Card
