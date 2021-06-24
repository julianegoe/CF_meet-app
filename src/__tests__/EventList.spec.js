import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
	let EventListWrapper;
	beforeAll(() => {
		EventListWrapper = shallow(<EventList number={10} events={mockData} />);
	});

	it('renders default number of events', () => {
		expect(EventListWrapper.find(Event)).toHaveLength(
			EventListWrapper.props().children.length
		);
	});
});
