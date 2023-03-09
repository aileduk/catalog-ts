import { TCards } from "../types/shoesTypes"

export const getFilteredCards = (cards: TCards[], filter: string | null, search: string) => {
	return cards.filter(card => {
		const filterResult = !filter || card.category === filter
		const searchResult = search === "" || card.name.includes(search)

		return filterResult && searchResult
	})
}
