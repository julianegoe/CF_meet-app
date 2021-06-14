import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<App /> component', () => {
  let EventListWrapper
  beforeAll(() => {
    EventListWrapper = shallow(<EventList events={mockData} />);

  })

  it('renders all events', () => {      
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});