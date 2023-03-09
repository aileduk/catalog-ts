import React, { FC, useMemo, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import CardItem from "../CardItem/CardItem"
import NotFound from "../NotFound/NotFound"

import { useAppSelector } from "../../hooks/hook"

import { getFilteredCards } from "../../helpers/filteredCards"

import styles from "./Cards.module.scss"

const Cards: FC = () => {
	const { cards, filter, search } = useAppSelector(state => state.shoes)

	const [page, setPage] = useState<number>(1)

	const filteredCards = useMemo(() => {
		return getFilteredCards(cards, filter, search)
	}, [cards, filter, search])

	const cardsToRender = useMemo(() => {
		return filteredCards.filter((_, index) => index + 1 <= page * 5)
	}, [page, filteredCards])

	return (
		<>
			{search.length && !cardsToRender.length ? (
				<NotFound />
			) : (
				<InfiniteScroll
					loader
					dataLength={cardsToRender.length}
					next={() => setPage(prev => prev + 1)}
					hasMore={true}
					className={styles.container}>
					{cardsToRender.map(card => (
						<CardItem card={card} key={card.name} />
					))}
				</InfiniteScroll>
			)}
		</>
	)
}

export default Cards
