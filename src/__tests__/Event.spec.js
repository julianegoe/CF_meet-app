import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
	let EventWrapper;
	beforeEach(() => {
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});

	it('renders the summary of the event', () => {
		const titleElement = EventWrapper.find('h2');
		expect(titleElement.text()).toBe(mockData[0].summary);
	});

	it('renders the start time of the event', () => {
		const optionsDate = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const optionsTime = {
			hour: '2-digit',
			minute: '2-digit',
		};
		const time = new Date(mockData[0].start.dateTime).toLocaleTimeString(
			'en-US',
			optionsTime
		);
		const date = new Date(mockData[0].start.dateTime).toLocaleDateString(
			'en-US',
			optionsDate
		);
		const datetimeElement = EventWrapper.find('.date-time');
		expect(datetimeElement.text()).toBe(`${date} - ${time}`);
	});

	it('renders the location of the event', () => {
		const locationElement = EventWrapper.find('.location');
		expect(locationElement.text()).toBe(mockData[0].location);
	});

	it('renders Show Details button', () => {
		const buttonElement = EventWrapper.find('.details-btn');
		expect(buttonElement.text()).toBe('Show Details');
	});

	it('toggles Hide/Show Details in state when clicking', () => {
		const buttonElement = EventWrapper.find('.details-btn');
		buttonElement.simulate('click');
		expect(EventWrapper.state().buttonLabel).toBe('Hide Details');
		buttonElement.simulate('click');
		expect(EventWrapper.state().buttonLabel).toBe('Show Details');
	});

	it('renders About Event headline when clicking Show Details button', () => {
		const buttonElement = EventWrapper.find('.details-btn');
		expect(EventWrapper.find('.about-event').exists()).toEqual(false);
		buttonElement.simulate('click');
		expect(EventWrapper.find('.about-event').text()).toBe('About Event');
	});

	it('renders event description when clicking Show Details button', () => {
		const buttonElement = EventWrapper.find('.details-btn');
		expect(EventWrapper.find('.description').exists()).toEqual(false);
		buttonElement.simulate('click');
		expect(EventWrapper.find('.description').text()).toBe(
			mockData[0].description
		);
	});
});
