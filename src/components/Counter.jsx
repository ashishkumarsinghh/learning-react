import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.inc = this.inc.bind(this);
		this.dec = this.dec.bind(this);
	}
	inc() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	dec() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.inc}>Increment</button>
				<button onClick={this.dec}>Decrement</button>
			</div>
		);
	}
}
