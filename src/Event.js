import React, { useState } from 'react';

export default function Event({ event }) {
	const [buttonLabel, setBttonLabel] = useState('Show Details');

	const handleClick = () => {
		buttonLabel === 'Show Details'
			? setBttonLabel('Hide Details')
			: setBttonLabel('Show Details');
	};

	return (
		<div className='event'>
			<h1>{event.summary}</h1>
			<p className='date-time'>{event.start.dateTime}</p>
			<span className='time-zone'>({event.start.timeZone})</span>
			<p className='location'>{event.location}</p>
			{buttonLabel === 'Hide Details' ? (
				<div>
					<h2 className='about-event'>About Event</h2>
					<p className='description'>{event.description}</p>
					<a className='html-link' href={event.htmlLink}>
						See Details on Google Calendar
					</a>
				</div>
			) : null}

			<button
				className='details-btn'
				onClick={() => {
					handleClick();
				}}>
				{buttonLabel}
			</button>
		</div>
	);
}
