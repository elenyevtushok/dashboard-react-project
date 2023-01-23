import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Time() {

	const [time, setTime] = useState(new Date())

	useEffect(() => {
		let timer = setInterval(() => setTime(new Date()), 1000)

		return function cleanup() {
			clearInterval(timer)
		}
	})
	return (
		<div>
			<div>{time.toLocaleTimeString("en-GB", { timeStyle: "short" })}</div>
			<div className='date'>{time.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</div>
		</div>
	)
}
