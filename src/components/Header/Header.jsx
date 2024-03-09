import React from 'react'
import Theme from './Theme'
import MobileMenu from './MobileMenu'
import NavItems from './NavItems'
import logo from '/images/logo.svg'

export default function Header() {
	const [dark, setDark] = React.useState(false)

	// Theme
	const root = document.querySelector(':root')

	React.useEffect(() => {
		const mode = localStorage.getItem('mode')
		if (mode && mode === 'dark') {
			root.classList.add('dark')
			setDark(true)
		}
	}, [])

	const handleToggle = () => {
		setDark(prevDark => !prevDark)
		root.classList.toggle('dark')
		if (root.classList.contains('dark')) {
			localStorage.setItem('mode', 'dark')
		} else {
			localStorage.setItem('mode', 'light')
		}
	}

	return (
		<header>
			<h1 className='sr-only'>Frontend Mentor | News homepage</h1>
			<a
				href='#'
				className={dark ? 'logo dark' : 'logo'}
			>
				<img
					src={logo}
					alt='Site logo'
					width={65}
					height={40}
				/>
			</a>
			<Theme
				dark={dark}
				onClick={handleToggle}
			/>
			<nav className='nav'>
				<MobileMenu dark={dark} />
				<ul className='desk-menu'>
					<NavItems show={true} />
				</ul>
			</nav>
		</header>
	)
}
