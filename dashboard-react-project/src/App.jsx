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
		fontSize: '40px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	useEffect( () => {
		fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
			.then(res => res.json())
			.then(data => {
				setBackgroundImage({ imageUrl: data.urls.regular, imageAuthor: data.user.name })
			})
		.catch(err => {
			setBackgroundImage({ imageUrl: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ0NjM2MTE&ixlib=rb-4.0.3&q=80", imageAuthor: "Mark Harpur" })
		})
	},[]
	)
	
	
	return (
		<main className="App" style = {myStyle}>
			<div className='crypto-and-weather'>
				<div>
				<Crypto />
				</div>
				<div>
				<Weather />
				</div>
			</div>
			<h1 className='time'>
				<Time />
			</h1>
			<div className='author'>By: {backgroundImage.imageAuthor}</div>
		</main>
	)
}

export default App
