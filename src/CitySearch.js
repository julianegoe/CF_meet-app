import React, { useState } from 'react';

function CitySearch({ locations, updateEvents }) {
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(undefined);

	const handleInput = (event) => {
		setQuery(event.target.value);
		const filteredLocations = locations.filter((location) => {
			return (
				location.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
			);
		});
		setSuggestions(filteredLocations);
	};

	const handleItemClicked = (suggestion) => {
		setQuery(suggestion);
		updateEvents(suggestion, null);
		setShowSuggestions(false);
	};

	const handleFocus = () => {
		setShowSuggestions(true);
	};

	return (
		<div className='CitySearch'>
			<input
				type='text'
				value={query}
				className='city'
				onChange={handleInput}
				onFocus={handleFocus}
			/>

			<ul
				className='suggestions'
				style={showSuggestions ? {} : { display: 'none' }}>
				{suggestions.map((suggestion) => {
					return (
						<li
							key={suggestion}
							onClick={() => {
								handleItemClicked(suggestion);
							}}>
							{suggestion}
						</li>
					);
				})}
				<li
					key='all'
					onClick={() => {
						handleItemClicked('all');
					}}>
					Show all cities
				</li>
			</ul>
		</div>
	);
}

export default CitySearch;
