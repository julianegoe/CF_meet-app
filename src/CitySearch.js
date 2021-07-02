import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			suggestions: [],
			showSuggestions: undefined,
			infoText: '',
		};
	}

	handleInput = (event) => {
		const value = event.target.value;
		const filteredLocations = this.props.locations.filter((location) => {
			return (
				location.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
			);
		});
		if (filteredLocations.length === 0) {
			this.setState({
				query: value,
				suggestions: filteredLocations,
				infoText: "We couldn't find your location. Please enter another one.",
			});
		} else {
			this.setState({
				query: value,
				suggestions: filteredLocations,
				infoText: '',
			});
		}
	};

	handleItemClicked = (suggestion) => {
		this.setState({ query: suggestion });
		this.props.updateEvents(suggestion, null);
		this.setState({ showSuggestions: false });
		this.setState({ infoText: '' });
	};

	handleFocus = () => {
		this.setState({ showSuggestions: true });
	};

	render() {
		const { query, suggestions, showSuggestions } = this.state;
		return (
			<div className='CitySearch'>
				<InfoAlert text={this.state.infoText} />
				<label htmlFor='city'>Search for Location: </label>
				<input
					type='text'
					value={query}
					className='city'
					onChange={this.handleInput}
					onFocus={this.handleFocus}
				/>
				<ul
					className='suggestions'
					style={showSuggestions ? {} : { display: 'none' }}>
					{suggestions.map((suggestion) => {
						return (
							<li
								key={suggestion}
								onClick={() => {
									this.handleItemClicked(suggestion);
								}}>
								{suggestion}
							</li>
						);
					})}
					<li
						key='all'
						onClick={() => {
							this.handleItemClicked('all');
						}}>
						Show all cities
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
