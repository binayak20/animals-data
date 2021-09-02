function getCatImages(num) {
	let data = [];
	for (let i = 1; i <= num; i++) {
		if (i < 10) data.push(`image/animals/cats/cats_0000${i}.jpg`);
		else data.push(`image/animals/cats/cats_000${i}.jpg`);
	}
	return data;
}
function getDogImages(num) {
	let data = [];
	for (let i = 1; i <= num; i++) {
		if (i < 10) data.push(`image/animals/dogs/dogs_0000${i}.jpg`);
		else data.push(`image/animals/dogs/dogs_000${i}.jpg`);
	}
	return data;
}
function getPandaImages(num) {
	let data = [];
	for (let i = 1; i <= num; i++) {
		if (i < 10) data.push(`image/animals/panda/panda_0000${i}.jpg`);
		else data.push(`image/animals/panda/panda_000${i}.jpg`);
	}
	return data;
}

export { getPandaImages, getDogImages, getCatImages };
