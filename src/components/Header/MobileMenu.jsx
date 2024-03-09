import React from 'react'
import imgCross from '/images/icon-menu-close.svg'
import imgHamburger from '/images/icon-menu.svg'
import NavItems from './NavItems'

export default function MobileMenu(props) {
	const [show, setShow] = React.useState(false)

	const handleClick = () => {
		setShow(prevShow => !prevShow)
	}

	// CLOSE MENU
	// Click outside
	document.addEventListener('click', e => {
		if (!e.target.classList.contains('menu-item')) {
			setShow(false)
		}
	})

	// Escape
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			setShow(false)
		}
	})

	return (
		<div className='mobile-menu'>
			<div
				style={{
					position: 'fixed',
					top: '0',
					left: '0',
					height: '100vh',
					width: show ? '100vw' : 0,
					transition: 'width 0.5s',
					backgroundColor: 'rgba(50, 50, 50, 0.65)',
					backdropFilter: 'blur(0.1rem)',
				}}
			></div>
			<button
				className='menu-item'
				type='button'
				aria-label={show ? 'Close navigation bar' : 'Open navigation bar'}
				aria-expanded={show ? 'true' : 'false'}
				onClick={handleClick}
				style={{
					position: show ? 'fixed' : 'static',
					top: '2.5rem',
					right: '1.5rem',
					zIndex: '1',
				}}
			>
				<img
					className='menu-item'
					src={show ? imgCross : imgHamburger}
					alt=''
					width={40}
					height={17}
					style={{
						filter: props.dark ? 'invert(90%) hue-rotate(180deg)' : 'none',
					}}
				/>
			</button>
			<ul
				className='menu menu-item'
				aria-hidden={show ? 'false' : 'true'}
				style={{
					position: 'fixed',
					top: '0',
					right: '0',
					height: '100vh',
					width: show ? 'min(90vw, 16rem)' : 0,
					transition: 'width 0.5s',
					padding: show ? '20vh 2rem' : 0,
					overflow: 'hidden',
					display: 'grid',
					alignContent: 'start',
					gap: '2rem',
				}}
			>
				<NavItems show={show} />
			</ul>
		</div>
	)
}
