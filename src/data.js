import { getCatImages, getDogImages, getPandaImages } from './helpers';

const catImages = getCatImages(50);
const dogImages = getDogImages(25);
const pandaImages = getPandaImages(40);
export const animalData = [
	{
		name: 'Cat',
		value: catImages.length,
		categoryImage: 'cat.jpg',
		images: catImages,
	},
	{
		name: 'Dog',
		value: dogImages.length,
		categoryImage: 'dog.jpg',
		images: dogImages,
	},
	{
		name: 'Panda',
		value: pandaImages.length,
		categoryImage: 'panda.jpg',
		images: pandaImages,
	},
];
