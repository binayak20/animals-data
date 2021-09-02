import React, { useState } from 'react';
import { animalData } from '../../data';

const SelectGrid = () => {
	const [images, setImages] = useState(animalData[0].images);
	const getAnimalByCategory = (value) => {
		const images = animalData.find(
			(category) => category.name === value
		).images;

		setImages(images);
	};
	return (
		<div>
			<select
				defaultValue='Cat'
				className='form-select custome'
				aria-label='Default select example'
				onChange={(e) => getAnimalByCategory(e.target.value)}
			>
				{animalData.map((category) => (
					<option key={category.name} value={category.name}>
						{category.name}
					</option>
				))}
			</select>

			{images.map((image) => (
				<img
					key={image}
					src={`${image}`}
					className='square border-image'
					alt='...'
					width={80}
					height={80}
				/>
			))}
		</div>
	);
};

export default SelectGrid;
