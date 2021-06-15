import React, {Component} from 'react';

export default class Event extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
             buttonLabel : "Show Details"
          }};

    handleClick = () => {
        this.state.buttonLabel === "Show Details" ? 
        this.setState({buttonLabel : "Hide Details"}) : this.setState({buttonLabel: "Show Details"})
    }


 render () {
    return (
        <div className="Event">
            <h1>{this.props.event.summary}</h1>
            <p className="date-time">{this.props.event.start.dateTime}</p>
            <span className="time-zone">({this.props.event.start.timeZone})</span>
            <p className="location">{this.props.event.location}</p>
            {this.state.buttonLabel === "Hide Details" ?
            (
            <div>
            <h2 className="about-event">About Event</h2>
            <p className="description">{this.props.event.description}</p>
            <a className="html-link" href={this.props.event.htmlLink}>See Details on Google Calendar</a>
            </div>) : null}

            <button className="details-btn" onClick={() => {this.handleClick()}}>{this.state.buttonLabel}</button>
        </div>
       
    )
 }
    
}