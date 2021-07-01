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
			number: 10,
			errorText: '',
			infoText: '',
		};
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events,
					locations: extractLocations(events),
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = async (location, number) => {
		// default values
		number = number || this.state.number;
		location = location || 'all';

		const allEvents = await getEvents();
		if (location === 'all') {
			this.setState({ events: allEvents, infoText: '' });
		} else {
			const updatedEvents = allEvents
				.filter((event) => {
					return event.location === location;
				})
				.filter((item, index) => index < number);
			this.setState({ events: updatedEvents });
		}
	};

	updateNumber = (number) => {
		let validationText = '';

		if (number < 0) {
			validationText = "You can't enter negative numbers.";
		} else if (number > this.state.events.length) {
			validationText = `There are not ${number} events. Please enter a smaller number.`;
		} else {
			this.setState({ number: number });
		}
		this.setState({ errorText: validationText });
	};

	render() {
		const { locations, events, number, errorText } = this.state;
		return (
			<div className='App'>
				<nav>
					<div className='logo'>Meet-App</div>
					<ul className='navigation-list'>
						<li id='search-nav' className='navigation-list__item'></li>
					</ul>
				</nav>
				<div className='container'>
					<NumberOfEvents
						errorText={errorText}
						number={number}
						updateNumber={this.updateNumber}
					/>
					<CitySearch locations={locations} updateEvents={this.updateEvents} />
					<EventList number={number} events={events} />
				</div>
			</div>
		);
	}
}
