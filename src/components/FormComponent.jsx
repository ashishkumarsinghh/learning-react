import React, { Component } from 'react';

export default class FormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { firstName: 'ashish', lastName: 'singh' };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		console.log('fun is called');
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		return (
			<form>
				<input type="text" onChange={this.handleChange} name="firstName" value={this.state.firstName} />
				<input type="text" onChange={this.handleChange} name="lastName" value={this.state.lastName} />
				<h2>
					{this.state.firstName} {this.state.lastName}
				</h2>
			</form>
		);
	}
}
