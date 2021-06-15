import React, { Component } from 'react';



class CitySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            suggestions: [],
        }
    };


    handleInput = (event) => {
        this.setState({ query: event.target.value })
        const filteredLocations = this.props.locations.filter(location => {
            return location.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
        })
        this.setState({ suggestions: filteredLocations })
    };

    handleItemClicked = (suggestion) => {
        this.setState({ query: suggestion })
    }


    render() {
        return (
            <div className="CitySearch">
                <input type="text" value={this.state.query} className="city" onChange={this.handleInput} />

                <ul className="suggestions">
                    {this.state.suggestions.map((suggestion) => {
                        return (

                            <li key={suggestion} onClick={() => { this.handleItemClicked(suggestion) }}>
                                {suggestion}
                            </li>
                        )
                    })}
                    <li key="all">
                        Show all cities
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch
