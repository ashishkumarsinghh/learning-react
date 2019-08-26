import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './todo.css';

export default class TodoList extends Component {
	render() {
		return (
			<div className="todolist">
				<TodoItem td="Learn React" />
				<TodoItem td="Learn Redux" />
				<TodoItem td="Learn Java" />
				<TodoItem td="Learn Android" />
				<TodoItem td="Learn System Design" />
				<TodoItem td="Practice Algo/DS." />
			</div>
		);
	}
}
