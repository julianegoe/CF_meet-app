import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import EventGenre from './EventGenre';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import { extractLocations, getEvents } from './api';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			locations: [],
			number: 10,
			errorText: '',
			warnText: '',
		};
	}

	componentDidMount() {
		this.mounted = true;
		window.addEventListener('offline', () => {
			this.setState({
				warnText: "You're offline. The data you see may not be up to date.",
			});
		});
		window.addEventListener('online', () => {
			this.setState({
				warnText: '',
			});
		});
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events,
					locations: extractLocations(events),
				});
			}
		});
	}

	getData = () => {
		const { locations, events } = this.state;
		const data = locations.map((location) => {
			const number = events.filter(
				(event) => event.location === location
			).length;
			const city = location.split(', ').shift();
			return { city, number };
		});
		console.log(data);
		return data;
	};

	componentWillUnmount() {
		this.mounted = false;
		window.removeEventListener('keydown', () => {
			this.setState({
				warnText: "You're offline. The dada you see may not be up to date.",
			});
		});

		window.removeEventListener('online', () => {
			this.setState({
				warnText: '',
			});
		});
	}

	updateEvents = async (location) => {
		// default values
		console.log('update events');
		const number = this.state.number;
		location = location || '';

		const allEvents = await getEvents();
		if (location === 'all' || number >= allEvents.length) {
			this.setState({ events: allEvents });
		} else {
			const updatedEvents = allEvents.filter((event) => {
				return event.location === location;
			});
			this.setState({ events: updatedEvents });
		}
	};

	updateNumber = (number) => {
		let validationText = '';

		if (number < 0) {
			validationText = "You can't enter negative numbers.";
		} else if (number > this.state.events.length) {
			validationText = `There are not ${number} events. Please enter a number smaller than ${this.state.events.length}.`;
		} else {
			this.setState({ number: number });
		}
		this.setState({ errorText: validationText });
	};

	render() {
		const { locations, events, number, errorText, warnText } = this.state;
		return (
			<div className='App'>
				<nav>
					<div className='logo'>Meet-App</div>
					<ul className='navigation-list'>
						<li id='search-nav' className='navigation-list__item'>
							<WarningAlert text={warnText} />
						</li>
					</ul>
				</nav>
				<div className='container'>
					<CitySearch locations={locations} updateEvents={this.updateEvents} />
					<NumberOfEvents
						errorText={errorText}
						number={number}
						updateNumber={this.updateNumber}
					/>
					<div className='data-vis-wrapper'>
						<EventGenre events={events} />
						<ResponsiveContainer height={300}>
							<ScatterChart>
								<CartesianGrid strokeDashArray='1 1' />
								<XAxis type='category' dataKey='city' name='city' />
								<YAxis
									allowDecimals={false}
									type='number'
									dataKey='number'
									name='number of events'
								/>
								<Tooltip />
								<Scatter data={this.getData()} fill='#D0ABA0' />
							</ScatterChart>
						</ResponsiveContainer>
					</div>

					<EventList number={number} events={events} />
				</div>
			</div>
		);
	}
}
