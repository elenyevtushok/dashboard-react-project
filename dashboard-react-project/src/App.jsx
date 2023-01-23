import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather';
import Crypto from './Components/Crypto';
import Time from './Components/Time';

function App() {

	const [backgroundImage, setBackgroundImage] = useState({
		imageUrl: "",
		imageAuthor: ""
	})
	const myStyle = {
		backgroundImage: `url(${backgroundImage.imageUrl})`,
		height: '100vh',
		margin: '-8px',
		fontSize: '50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	useEffect( () => {
		addImage();
	}, []
	)
	async function addImage() {
		const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
		const data = await res.json()
		setBackgroundImage({imageUrl: data.urls.regular, imageAuthor: data.user.name})
		console.log(data)
		console.log(backgroundImage)
	}
	
	return (
		<main className="App" style = {myStyle}>
			<div className='crypto-and-weather'>
				<p>
				<Crypto />
				</p>
				<p>
				<Weather />
				</p>
			</div>
			<h1 className='time'>
				<Time />
			</h1>
			<div className='author'>By: {backgroundImage.imageAuthor}</div>
		</main>
	)
}

export default App
