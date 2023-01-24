import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Weather() {
	const [weather, setWeather] = useState({
		temperature: "",
		icon: "",
		city: ""
	})

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position)
			fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
				.then(res => {
					if (!res.ok) {
						throw Error("Weather data not available")
					}
					return res.json()
				})
				.then(data => {
					console.log(data)
					setWeather({
						temperature: Math.round(data.main.temp),
						icon: data.weather[0].icon,
						city: data.name
					})
				})
				.catch(err => console.error(err))
		})
	}, [])

	return (
		<div className='weather'>
			<div className='weather-temp-icon'>
				{weather.icon&&<img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />}
				{weather.temperature&&<span>{weather.temperature}°C</span>}
			</div>
			<div className='weather-city'>{weather.city}</div>
		</div>
	)
}
