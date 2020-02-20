import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

	constructor(props) {
		super(props)
		// this.onChangeUsername = this.onChangeUsername.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
		// this.state = {
		// 	username: ''
		// }
	}

	// componentDidMount() {
	// 	this.setState({
	// 		username: ''
	// 	})
	// }

	// onChangeUsername(e) {
	// 	this.setState({
	// 		username: e.target.value
	// 	});
	// }

	// onSubmit(e) {
	// 	e.preventDefault();

	// 	const user = {
	// 		userName: this.state.username,
	// 	}

	// 	console.log(user);

	// 	axios.post('http://localhost:5000/users/add', user)
	// 		.then(res => console.log(res.data));

	// 	this.setState({
	// 		username: ''
	// 	})
	// }


	render() {
		return (
			<div>
				<h3> Inside Create new user Component</h3>
			</div>
		)
	}
}