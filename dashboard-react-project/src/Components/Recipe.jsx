import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Recipe() {
	const [recipe, setRecipe] = useState({
		label: "",
		image: "",
		url: ""
	})
	useEffect(() => {
		fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=5075ae44&app_key=3e4f7fc183833db98f9af8ff85e17de8&diet=balanced&random=true")
			.then(res => {
				if (!res.ok) {
					throw Error("Something went wrong")
				}
				return res.json()
			})
			.then(data => {
				console.log(data)
				setRecipe(
					{
						label: data.hits[0].recipe.label.substring(0, 25),
						image: data.hits[0].recipe.image,
						url: data.hits[0].recipe.url,
					})
			})
			.catch(err => console.log(err))
	}, [])
	return (
		<div className='recipe'>
			<a href={recipe.url} target = "_blank">
			<img className='recipe-image' src={recipe.image} />
			</a>
			<div>Recipe idea for today:</div>
			<a className='recipe-link' target="_blank" href = {recipe.url}>{recipe.label}...</a>
		</div>
	)
}
