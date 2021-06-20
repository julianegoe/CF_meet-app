import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	it('renders list of events', () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	it('renders CitySearch component', () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});

	it('renders NumberOfEvents component', () => {
		expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
	});
});

describe('<App /> component integraton', () => {
	it('passes "events" state as a prop to EventList', async () => {
		const AppWrapper = mount(<App />);
		const AppEventsState = AppWrapper.state('events');
		expect(AppEventsState).not.toEqual(undefined);
		expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
		AppWrapper.unmount();
	});

	it('passes "locations" state as a prop to CitySearch', () => {
		const AppWrapper = mount(<App />);
		expect(AppWrapper.state('locations')).not.toEqual(undefined);
		expect(AppWrapper.find(CitySearch).props().locations).toEqual(
			AppWrapper.state('locations')
		);
		AppWrapper.unmount();
	});

	it('gets list of events matching the city selected by the user', async () => {
		const AppWrapper = mount(<App />);
		const CitySearchWrapper = AppWrapper.find(CitySearch);
		const locations = extractLocations(mockData);
		CitySearchWrapper.setState({ suggestions: locations });
		const suggestions = CitySearchWrapper.state('suggestions');
		const selectedIndex = Math.floor(Math.random() * suggestions.length);
		const selectedCity = suggestions[selectedIndex];
		await CitySearchWrapper.instance().handleItemClicked(selectedCity);
		const allEvents = await getEvents();
		const eventsToShow = allEvents.filter(
			(event) => event.location === selectedCity
		);
		expect(AppWrapper.state('events')).toEqual(eventsToShow);
		AppWrapper.unmount();
	});

	it('gets list of all events when user selects "See all cities', async () => {
		const AppWrapper = mount(<App />);
		const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
		await suggestionItems.at(suggestionItems.length - 1).simulate('click');
		const allEvents = await getEvents();
		expect(AppWrapper.state('events')).toEqual(allEvents);
		AppWrapper.unmount();
	});
});
