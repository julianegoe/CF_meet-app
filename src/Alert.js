import React, { Component } from 'react';

class Alert extends Component {
	constructor(props) {
		super(props);
		this.color = null;
		this.fontSize = '0.75rem';
		this.icon = '';
	}

	getStyle = () => {
		return {
			color: this.color,
			fontSize: this.fontSize,
		};
	};

	getIcon = () => {
		if (this.props.text) {
			return this.icon;
		}
	};

	render() {
		return (
			<div className='Alert'>
				<p style={this.getStyle()}>
					<i style={{ marginRight: '5px' }} className={this.getIcon()}></i>
					{this.props.text}
				</p>
			</div>
		);
	}
}

class InfoAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = 'blue';
		this.icon = 'bi bi-info-circle';
	}
}

export class WarningAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = 'orange';
		this.icon = 'bi bi-exclamation-diamond';
	}
}

export class ErrorAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = 'red';
		this.icon = 'bi bi-emoji-frown';
	}
}

export { InfoAlert };
