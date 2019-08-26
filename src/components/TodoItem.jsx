import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="todoitem">
				<input type="checkbox" className="tdCheckBox" id="tdcb" />
				<span className="todoText">{this.props.td}</span>
			</div>
		);
	}
}
