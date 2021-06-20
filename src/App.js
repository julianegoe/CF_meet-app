import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			locations: [],
		};
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({ events, locations: extractLocations(events) });
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = async (location) => {
		const allEvents = await getEvents();
		if (location !== 'all') {
			const updatedEvents = allEvents.filter((event) => {
				return event.location === location;
			});
			this.setState({ events: updatedEvents });
		} else this.setState({ events: allEvents });
	};

	render() {
		const { events, locations } = this.state;
		return (
			<div className='App'>
				<CitySearch locations={locations} updateEvents={this.updateEvents} />
				<NumberOfEvents />
				<EventList events={events} />
			</div>
		);
	}
}
