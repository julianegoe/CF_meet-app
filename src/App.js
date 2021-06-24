import React, { useEffect, useState } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

export default function App() {
	const [events, setEvents] = useState([]);
	const [locations, setLocations] = useState([]);
	const [number, setNumber] = useState(10);

	useEffect(() => {
		async function fetchEvents() {
			await getEvents().then((events) => {
				setEvents(events);
				const locations = extractLocations(events);
				setLocations(locations);
			});
		}
		fetchEvents();
	}, []);

	const updateEvents = async (location, number) => {
		const allEvents = await getEvents();
		if (location === 'all') {
			setEvents(allEvents);
		} else {
			const updatedEvents = allEvents.filter((event) => {
				return event.location === location;
			});
			setEvents(updatedEvents);
		}
	};

	const updateNumber = (number) => {
		setNumber(number);
	};

	return (
		<div className='App'>
			<CitySearch locations={locations} updateEvents={updateEvents} />
			<NumberOfEvents number={number} updateNumber={updateNumber} />
			<EventList number={number} events={events} />
		</div>
	);
}
