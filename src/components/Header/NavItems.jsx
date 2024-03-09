import React from 'react'
import pages from '../../data/pages.json'

export default function NavItems(props) {
	return pages.map(link => (
		<li
			key={link}
			className='menu-item'
		>
			<a
				href='#'
				className='item menu-item'
				style={{ display: props.show ? 'inline' : 'none' }}
			>
				{link}
			</a>
		</li>
	))
}
