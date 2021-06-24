import React from 'react';
import PropTypes from 'prop-types';

function NumberOfEvents({ number, updateNumber }) {
	return (
		<div>
			<label htmlFor='event-number'>Number of Events:</label>
			<input
				id='event-number'
				type='number'
				value={number}
				onChange={(e) => updateNumber(e.target.value)}></input>
		</div>
	);
}

export default NumberOfEvents;

NumberOfEvents.propTypes = {
	number: PropTypes.number,
	updateNumber: PropTypes.func,
};
