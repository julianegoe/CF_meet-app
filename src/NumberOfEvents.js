import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchNumber: '32',
		};
	}

	handleChange = (event) => {
		this.setState({ searchNumber: event.target.value });
	};

	render() {
		return (
			<div>
				<label htmlFor='event-number'>Number of Events:</label>
				<input
					type='number'
					id='event-number'
					value={this.state.searchNumber}
					onChange={(e) => {
						this.handleChange(e);
					}}
				/>
			</div>
		);
	}
}
