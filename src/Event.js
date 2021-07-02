import React, { Component } from 'react';

export default class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonLabel: 'Show Details',
			time: '',
		};
	}

	componentDidMount() {
		const time = new Date(this.props.event.start.dateTime).toLocaleString();
		this.setState({ time: time });
	}

	handleClick = () => {
		this.state.buttonLabel === 'Show Details'
			? this.setState({ buttonLabel: 'Hide Details' })
			: this.setState({ buttonLabel: 'Show Details' });
	};

	render() {
		const { buttonLabel, time } = this.state;
		return (
			<div className='event'>
				<p className='location'>{this.props.event.location}</p>
				<h1>{this.props.event.summary}</h1>
				<p className='date-time'>{time}</p>
				{buttonLabel === 'Hide Details' ? (
					<div className='event__Details'>
						<h3 className='about-event'>About Event</h3>
						<p className='description'>{this.props.event.description}</p>
					</div>
				) : null}

				<button
					className='details-btn'
					onClick={() => {
						this.handleClick();
					}}>
					{buttonLabel}
				</button>
			</div>
		);
	}
}
