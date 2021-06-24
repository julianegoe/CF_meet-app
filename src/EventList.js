import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
	render() {
		const filteredEvents = this.props.events.filter((item, index) => {
			return index < this.props.number;
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
}

export default EventList;
