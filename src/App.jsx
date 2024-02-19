/* eslint-disable no-undef */
import React, { Component } from 'react';
import SelectGrid from './components/animalsData/selectGrid';
import FlipMove from 'react-flip-move';
import Player from './Player';
import './App.css';
//

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			allImages: [],
		};
	}

	componentDidMount() {
		let imgs = [];
		for (let i = 0; i < 50; i++) {
			imgs.push({
				name: `Category ${i + 1}`,
				categoryImage: 'cat.jpg',
				images: [],
			});
		}
		this.setState({ data: imgs });
		this.getAllImages();
		// this.setState({ data: imgs, loading: true }, () => {
		// 	this.getAllImages()
		// 		.then(() => {
		// 			this.setState({ loading: false });
		// 		})
		// 		.catch((error) => {
		// 			console.error('Failed to fetch images', error);
		// 			this.setState({ loading: false, error: 'Failed to load images' });
		// 		});
		// });
	}

	getSortedArray(imgData) {
		const sortedArr = imgData.sort((a, b) => {
			return b.images.length - a.images.length;
		});
		return sortedArr;
	}

	getAllImages() {
		const canvas = document.querySelector('canvas');
		if (!canvas) {
			console.error('Canvas not found');
			return;
		}
		const video = document.querySelector('video');
		if (!video) {
			console.error('Video not found');
			return;
		}
		const ctx = canvas.getContext('2d');

		video.addEventListener('loadedmetadata', () => {
			canvas.height = video.videoHeight;
			canvas.width = video.videoWidth;
		});
		video.addEventListener('play', () => {
			let frames = [];
			const drawImage = () => {
				ctx.drawImage(video, 0, 0);

				if (!video.paused) {
					setTimeout(drawImage, 1000 / 24);
					let base64ImageData = canvas.toDataURL();
					frames.push(base64ImageData);
					const index = Math.floor(Math.random() * 50);
					let imgData = this.state.data;
					imgData[index].images.push(base64ImageData);

					const sortedArray = this.getSortedArray(imgData);

					this.setState({
						data: sortedArray,
					});
				}
			};
			setTimeout(drawImage, 1000 / 24);
		});
	}

	render() {
		const { data } = this.state;
		console.log('Data:', data);

		return (
			<div className='main'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							{data && data.length > 0 && <SelectGrid animalData={data} />}
						</div>
						<div className='col-md-6 '>
							<div className='row'>
								<div className='col-md-10'>
									<Player />
									<canvas style={{ width: 400, display: 'none' }}></canvas>
								</div>
							</div>

							<div className='progress-bar-container'>
								<FlipMove
									duration={500}
									staggerDelayBy={500}
									staggerDurationBy={1000}
									style={{ zIndex: -1 }}
								>
									{data.map((category) => (
										<div className='row' key={category.name}>
											<div className='col-md-10'>
												<div className='progress'>
													<div
														className='progress-bar'
														role='progressbar'
														style={{ width: `${category.images.length}%` }}
														aria-valuenow={category.images.length}
														aria-valuemin='0'
														aria-valuemax={category.images.length}
													>
														{category.images.length}
													</div>
												</div>
											</div>
											<div className='col-md-2'>
												<div className='label'>{category.name}</div>
											</div>
										</div>
									))}
								</FlipMove>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
