import React, { Component } from 'react';
import SelectGrid from './components/animalsData/selectGrid';
import { animalData } from './data';
import Player from './Player';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: animalData,
			images: animalData[0].images,
		};
	}

	render() {
		const { data } = this.state;
		return (
			<div className='main'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<SelectGrid />
						</div>
						<div className='col-md-6 '>
							<div className='row'>
								<div className='col-md-10'>
									<Player />
								</div>
							</div>

							<div className='progress-bar-container'>
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
													aria-valuemax='100'
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
