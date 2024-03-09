import React from 'react'
import web3Mobile from '/images/image-web-3-mobile.jpg'
import web3Desk from '/images/image-web-3-desktop.jpg'
import newArticles from '../../data/new.json'
import recArticles from '../../data/recom.json'
import { nanoid } from 'nanoid'

export default function Main() {
	// New articles
	const newArticlesItems = newArticles.map(article => (
		<li
			key={nanoid()}
			className='item'
		>
			<article>
				<h3>
					<a href='#'>{article.title}</a>
				</h3>
				<p className='description'>{article.description}</p>
			</article>
		</li>
	))

	// Recommended articles
	const recArticlesItems = recArticles.map(article => (
		<li
			key={article.number}
			className='item'
		>
			<article>
				<img
					src={article.img}
					alt=''
					width={200}
					height={254}
				/>
				<div className='info'>
					<span className='number'>{article.number}</span>
					<h3>
						<a href='#'>{article.title}</a>
					</h3>
					<p className='description'>{article.description}</p>
				</div>
			</article>
		</li>
	))

	return (
		<main>
			<article className='main-article'>
				<picture>
					<source
						media='(min-width: 30rem)'
						srcSet={web3Desk}
						width={1460}
						height={600}
					/>
					<img
						src={web3Mobile}
						alt=''
						width={686}
						height={600}
					/>
				</picture>
				<h2 className='title'>The Bright Future of Web 3.0?</h2>
				<p className='description'>
					We dive into the next evolution of the web that claims to put the
					power of the platforms back into the hands of the people. But is it
					really fulfilling its promise?
				</p>
				<a
					href='#'
					className='main-link'
					aria-label='Dive into the future of Web 3.0'
				>
					Read more
				</a>
			</article>

			<section className='new'>
				<h2 className='title'>New</h2>
				<ul>{newArticlesItems}</ul>
			</section>

			<section className='recommended'>
				<h2 className='sr-only'>Recommended articles</h2>
				<ul>{recArticlesItems}</ul>
			</section>
		</main>
	)
}
