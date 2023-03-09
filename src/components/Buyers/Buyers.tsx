import React, { FC } from "react"

import styles from "./Buyers.module.scss"
import { TSizestock } from "../../types/shoesTypes"

interface BuyersProps {
	activeSizeInfo: TSizestock
}

const Buyers: FC<BuyersProps> = ({ activeSizeInfo }) => {
	return (
		<div className={styles.container}>
			{activeSizeInfo.reservs.map(item => (
				<div className={styles.buyer} key={item.pcs}>
					<div className={styles.name}>{item.dropshipper_name.slice(0, 30)}</div>
					<div>|</div>
					<div className={styles.units}>{item.pcs} шт.</div>
					<div>|</div>
					<div className={styles.date}>{item.reservdate.slice(-8, item.reservdate.length)}</div>
				</div>
			))}
		</div>
	)
}
export default Buyers
