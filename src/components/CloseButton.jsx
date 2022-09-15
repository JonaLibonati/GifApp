import React from 'react'

export const CloseButton = ({category, setCategories}) => {

	const handlebutton = () => {
		setCategories((categories) => {
			let new_cat = [];

			categories.map((element) => {
				if (element != category) {
					new_cat.push(element)
				}
			});

			return new_cat;
		});
	}
	
  return (
    <div className = 'button' onClick={handlebutton}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
				<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
			</svg>
		</div>
  )
}
