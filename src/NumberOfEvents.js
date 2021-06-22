import React, { Component } from 'react';

class NumberOfEvents extends Component {
	render() {
		return (
			<div>
				<label htmlFor='event-number'>Number of Events:</label>
				<input
					type='number'
					id='event-number'
					value={this.props.eventsNumber}
					onChange={(e) => {
						this.setState({ searchNumber: e.target.value });
					}}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
