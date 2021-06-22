import React, { Component } from 'react';

class NumberOfEvents extends Component {
	handleChange = (event) => {
		this.props.updateEventsNumber(event.target.value);
		this.props.updateEvents(null, event.target.value);
	};

	render() {
		return (
			<div>
				<label htmlFor='event-number'>Number of Events:</label>
				<input
					type='number'
					id='event-number'
					value={this.props.eventsNumber}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
