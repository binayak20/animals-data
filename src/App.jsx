import React, { Component } from 'react';
//import NodeGroup from 'react-move/NodeGroup';
import { animalData } from './data';
import './App.css';
import Player from './Player';
import SelectGrid from './components/animalsData/selectGrid';

//let barHeight = 40;
// let barPadding = 5;
// let barColour = '#00FF00';
// let widthScale = (d) => d * 5;

// function BarGroup(props) {
// 	let width = widthScale(props.state.value);
// 	let yMid = barHeight * 0.5;

// 	return (
// 		<g className='bar-group' transform={`translate(0, ${props.state.y})`}>
// 			<rect
// 				y={barPadding * 0.5}
// 				width={width}
// 				height={barHeight - barPadding}
// 				style={{ fill: barColour, opacity: props.state.opacity }}
// 			/>
// 			<text
// 				className='value-label'
// 				x={width - 6}
// 				y={yMid}
// 				alignmentBaseline='middle'
// 			>
// 				{props.state.value.toFixed(0)}
// 			</text>
// 			<text
// 				className='name-label'
// 				x='-6'
// 				y={yMid}
// 				alignmentBaseline='middle'
// 				style={{ opacity: props.state.opacity }}
// 			>
// 				{props.data.name}
// 			</text>
// 		</g>
// 	);
// }

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: animalData,
			images: animalData[0].images,
		};
	}

	// startTransition(d, i) {
	// 	return { value: 0, y: i * barHeight, opacity: 0 };
	// }

	// enterTransition(d) {
	// 	return { value: [d.value], opacity: [1], timing: { duration: 250 } };
	// }

	// updateTransition(d, i) {
	// 	return { value: [d.value], y: [i * barHeight], timing: { duration: 300 } };
	// }

	// leaveTransition() {
	// 	return { y: [-barHeight], opacity: [0], timing: { duration: 250 } };
	// }
	// getAnimalByCategory(value) {
	// 	const { data } = this.state;
	// 	const images = data.find((category) => category.name === value).images;

	// 	this.setState({ images });
	// }

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
							<Player />
							{/* <svg width='800' height='2200'>
								<g className='chart' transform='translate(100,10)'>
									<NodeGroup
										data={this.state.data}
										keyAccessor={(d) => d.name}
										start={this.startTransition}
										enter={this.enterTransition}
										update={this.updateTransition}
										leave={this.leaveTransition}
									>
										{(nodes) => (
											<g>
												{nodes.map(({ key, data, state }) => (
													<BarGroup key={key} data={data} state={state} />
												))}
											</g>
										)}
									</NodeGroup>
								</g>
							</svg> */}
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
							{/* <div className='progress'>
								<div
									className='progress-bar progress-bar-animated'
									role='progressbar'
									style={{ width: '25%' }}
									aria-valuenow='25'
									aria-valuemin='0'
									aria-valuemax='100'
								></div>
							</div>
							<div className='progress'>
								<div
									className='progress-bar'
									role='progressbar'
									style={{ width: '50%' }}
									aria-valuenow='50'
									aria-valuemin='0'
									aria-valuemax='100'
								></div>
							</div>
							<div className='progress'>
								<div
									className='progress-bar'
									role='progressbar'
									style={{ width: '75%' }}
									aria-valuenow='75'
									aria-valuemin='0'
									aria-valuemax='100'
								></div>
							</div>
							<div className='progress'>
								<div
									className='progress-bar'
									role='progressbar'
									style={{ width: '100%' }}
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								></div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
