export type TCards = {
	name: string
	category: string
	img: string
	description: string
	price: string
	id: string
	sizestock: TSizestock[]
	activeSize?: string
}
export type TSizestock = {
	reserv: string
	size: string
	stock: string
	reservs: TReservs[]
}
type TReservs = {
	dropshipper_name: string
	pcs: string
	reservdate: string
}
