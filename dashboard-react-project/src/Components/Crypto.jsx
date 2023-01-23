import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Crypto() {
	const [dogecoin, setDogecoin] = useState({
		name: "", 
		image: "", 
		price_eur: "",
		price_eur_lowest: "",
		price_eur_highest: ""
})
	useEffect(() => {
		fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
		.then(res => {
			if(!res.ok){
				throw Error("Something went wrong")
			}
			return res.json()
		})
		.then(data => {
			console.log(data)
			setDogecoin(
				{ 
					name: data.name, 
					image: data.image.small, 
					price_eur: data.market_data.current_price.eur,
					price_eur_lowest: data.market_data.low_24h.eur,
					price_eur_highest: data.market_data.high_24h.eur 
				})
		})
		.catch(err=> console.log(err))
	}, [])
	return (
		<div className='crypto'>
			<div className='crypto-top'>
				<img src = {dogecoin.image} height ={40} />
				<span>{dogecoin.name}</span>
			</div>
			<p>🎯: € {dogecoin.price_eur}</p>
			<p>👆: € {dogecoin.price_eur_highest}</p>
			<p>👇: € {dogecoin.price_eur_lowest}</p>
		</div>
	)
}
