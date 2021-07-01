import React from 'react';
import { shallow, mount } from 'enzyme';
import CitySearch from '../CitySearch';
import { InfoAlert } from '../Alert';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
	let CitySearchWrapper;
	let locations;
	beforeAll(() => {
		locations = extractLocations(mockData);
		CitySearchWrapper = shallow(
			<CitySearch locations={locations} updateEvents={() => {}} />
		);
	});

	it('has input field', () => {
		expect(CitySearchWrapper.find('input')).toHaveLength(1);
	});

	it('renders a list of suggestions', () => {
		expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
	});

	it('renders text input correctly', () => {
		const query = CitySearchWrapper.state('query');
		expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
	});

	it('change state when text input changes', () => {
		CitySearchWrapper.setState({
			query: 'Munich',
		});
		const eventObject = { target: { value: 'Berlin' } };
		CitySearchWrapper.find('.city').simulate('change', eventObject);
		expect(CitySearchWrapper.state('query')).toBe('Berlin');
	});

	it('render list of suggestions correctly', () => {
		CitySearchWrapper.setState({ suggestions: locations });
		const suggestions = CitySearchWrapper.state('suggestions');
		expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(
			suggestions.length + 1
		);
		for (let i = 0; i < suggestions.length; i += 1) {
			expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(
				suggestions[i]
			);
		}
	});

	it('suggestion list match the query when changed', () => {
		CitySearchWrapper.setState({
			query: 'Munich',
		});
		const eventObject = { target: { value: 'Berlin' } };
		CitySearchWrapper.find('.city').simulate('change', eventObject);
		const query = CitySearchWrapper.state('query');
		const filteredLocations = locations.filter((location) => {
			return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
		});
		expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
	});

	it('selecting a suggestion should change query state', () => {
		CitySearchWrapper.setState({
			query: 'Berlin',
		});
		const suggestions = CitySearchWrapper.state('suggestions');
		CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
		expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
	});

	it('reveals the suggestions list when selecting CitySearch input', () => {
		CitySearchWrapper.find('.city').simulate('focus');
		expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
		expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({
			display: 'none',
		});
	});

	it('hides the suggestions list when selecting a suggestion', () => {
		CitySearchWrapper.setState({
			query: 'Berlin',
			showSuggestions: undefined,
		});
		CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
		expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
		expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({
			display: 'none',
		});
	});
});

describe('<CitySearch /> integration test', () => {
	let locations;
	beforeAll(() => {
		locations = extractLocations(mockData);
	});

	it('should show the info Text when user enters not found location', async () => {
		const CitySearchWrapper = await mount(
			<CitySearch locations={locations} updateEvents={() => {}} />
		);
		CitySearchWrapper.find('.city').simulate('change', {
			target: { value: 'nebwbda' },
		});
		expect(CitySearchWrapper.find(InfoAlert).props('text').text).toBe(
			"We couldn't find your location. Please enter another one."
		);
		CitySearchWrapper.unmount();
	});

	it('should hide the info Text when user clicks All Cities', async () => {
		const CitySearchWrapper = await mount(
			<CitySearch locations={locations} updateEvents={() => {}} />
		);
		CitySearchWrapper.find('.city').simulate('change', {
			target: { value: 'nebwbda' },
		});
		CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
		expect(CitySearchWrapper.find(InfoAlert).props('text').text).toBe('');
		CitySearchWrapper.unmount();
	});
});
