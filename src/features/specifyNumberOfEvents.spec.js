import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
	let AppWrapper;
	test('When user hasn’t specified a number, ten is the default number', ({
		given,
		when,
		then,
	}) => {
		given('the main page is open', () => {
			AppWrapper = mount(<App />);
		});

		when('user hasn’t entered a number in textbox Number of Events', () => {});

		then('user sees the default value ten', () => {
			AppWrapper.update();
			expect(AppWrapper.find('#event-number').props().defaultValue).toBe(10);
		});
	});

	test('User can change the number of events they want to see', ({
		given,
		when,
		then,
	}) => {
		given('the main page is open', () => {
			AppWrapper = mount(<App />);
		});

		when('user enters number five in textbox Number of Events', () => {
			AppWrapper.update();
			AppWrapper.find('#event-number').simulate('change', {
				target: { value: 5 },
			});
		});

		then('user sees a list of five events', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.eventList li')).toHaveLength(5);
		});
	});
});
