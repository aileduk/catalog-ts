import React, { FC } from "react"

import styles from "./Modal.module.scss"

interface ModalProps {
	img: string
	active: boolean
	toggleModal: () => void
}

const Modal: FC<ModalProps> = ({ img, active, toggleModal }) => {
	return (
		<div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={toggleModal}>
			<div className={styles.content} onClick={e => e.stopPropagation()}>
				<img src={img} alt="Modal" />
			</div>
		</div>
	)
}

export default Modal
