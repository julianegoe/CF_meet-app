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
			eventsNumber: '10',
		};
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				const filteredEvents = events.slice(0, this.state.eventsNumber);
				this.setState({
					events: filteredEvents,
					locations: extractLocations(events),
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEventsNumber = (value) => {
		this.setState({ eventsNumber: value });
	};

	updateEvents = async (location, number = this.state.eventsNumber) => {
		const allEvents = await getEvents();
		if (location === 'all') {
			this.setState({ events: allEvents });
		} else {
			const updatedEvents = allEvents.filter((event) => {
				return event.location === location;
			});
			this.setState({ events: updatedEvents });
		}
		const slicedEvents = allEvents.slice(0, number);
		this.setState({ eventsNumber: slicedEvents });
	};

	render() {
		const { events, locations } = this.state;
		return (
			<div className='App'>
				<CitySearch locations={locations} updateEvents={this.updateEvents} />
				<NumberOfEvents
					eventsNumber={this.state.eventsNumber}
					updateEventsNumber={this.updateEventsNumber.bind(this)}
					updateEvents={this.updateEvents.bind(this)}
				/>
				<EventList events={events} />
			</div>
		);
	}
}
