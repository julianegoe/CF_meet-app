import React from 'react';
import Event from './Event';

function EventList({ events, number }) {
	const filteredEvents = events.filter((item, index) => {
		return index < number;
	});

	return (
		<ul className='eventList'>
			{filteredEvents.map((event) => {
				return (
					<li key={event.id}>
						<Event event={event} />
					</li>
				);
			})}
		</ul>
	);
}

export default EventList;
