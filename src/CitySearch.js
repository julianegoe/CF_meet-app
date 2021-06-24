import React, { Component } from 'react';

class CitySearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			suggestions: [],
			showSuggestions: undefined,
		};
	}

	handleInput = (event) => {
		this.setState({ query: event.target.value });
		const filteredLocations = this.props.locations.filter((location) => {
			return (
				location.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
			);
		});
		this.setState({ suggestions: filteredLocations });
	};

	handleItemClicked = (suggestion) => {
		this.setState({ query: suggestion });
		this.props.updateEvents(suggestion, null);
		this.setState({ showSuggestions: false });
	};

	handleFocus = () => {
		this.setState({ showSuggestions: true });
	};

	render() {
		const { query, suggestions, showSuggestions } = this.state;
		return (
			<div className='CitySearch'>
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
