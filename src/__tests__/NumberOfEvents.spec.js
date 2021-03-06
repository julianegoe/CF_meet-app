import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvents component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents eventsNumber={'10'} />);
	});

	it('renders lebel for number of events input field', () => {
		expect(NumberOfEventsWrapper.find('label').text()).toBe(
			'Number of Events: '
		);
	});

	it('renders input field for number of events', () => {
		expect(NumberOfEventsWrapper.find('#event-number')).toHaveLength(1);
	});

	it('has a default input value', () => {
		const number = NumberOfEventsWrapper.instance().props.numberOfEvents;
		expect(NumberOfEventsWrapper.find('#event-number').props().value).toBe(
			number
		);
	});
});
