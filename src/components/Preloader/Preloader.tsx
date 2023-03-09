import React, { FC } from "react"
import ContentLoader from "react-content-loader"

const Preloader: FC = () => {
	return (
		<ContentLoader width="320" backgroundColor="#e8e8e8" foregroundColor="#e0e0e0" speed={2}>
			<rect x="0" y="10" rx="4" ry="4" width="100" height="45" />
			<rect x="110" y="10" rx="4" ry="4" width="100" height="45" />
			<rect x="220" y="10" rx="4" ry="4" width="100" height="45" />
			<rect x="0" y="85" rx="4" ry="4" width="320" height="45" />
			<rect x="0" y="150" rx="4" ry="4" width="320" height="750" />
			<rect x="0" y="920" rx="4" ry="4" width="320" height="750" />
			<rect x="0" y="1690" rx="4" ry="4" width="320" height="750" />
			<rect x="0" y="2460" rx="4" ry="4" width="320" height="750" />
		</ContentLoader>
	)
}

export default Preloader
