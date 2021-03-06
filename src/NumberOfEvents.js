import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	render() {
		return (
			<div className='NumberOfEvents'>
				<ErrorAlert text={this.props.errorText} />
				<label htmlFor='event-number'>Number of Events: </label>
				<input
					id='event-number'
					type='number'
					defaultValue={this.props.number}
					onChange={(e) => this.props.updateNumber(e.target.value)}></input>
			</div>
		);
	}
}

export default NumberOfEvents;

NumberOfEvents.propTypes = {
	number: PropTypes.number,
	updateNumber: PropTypes.func,
};
