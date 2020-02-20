import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = props => (
	<tr>
		<td>{props.exercise.userName} </td>
		<td>{props.exercise.description} </td>
		<td>{props.exercise.duration} </td>
		<td>{props.exercise.date.substring(0, 10)} </td>
		<td>
			<Link to={"/edit/" + props.exercise._id}><button type="button" class="btn btn-success"> Edit </button></Link> | <button type=" button" class="btn btn-danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
		</td>
	</tr>
)

export default class EventsList extends Component {

	constructor(props) {
		super(props);
		// this.deleteExercise = this.deleteExercise.bind(this);
		// this.state = {
		// 	exercises: []
		// };
	}

	// componentDidMount() {
	// 	axios.get('http://localhost:5000/exercises/')
	// 		.then(response => {
	// 			this.setState({
	// 				exercises: response.data
	// 			})
	// 			console.log(response.data)
	// 		})
	// 		.catch(error => console.log(error));
	// }

	// deleteExercise(id) {
	// 	axios.delete('http://localhost:5000/exercises/' + id)
	// 		.then(res => console.log(res.data))
	// 		.catch(error => console.log(error));
	// 	this.setState({
	// 		exercises: this.state.exercises.filter(el=>el._id!==id)
	// 	})
	// }

	// exerciseList() {
	// 	return this.state.exercises.map(currentexercise => {
	// 		return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
	// 	})
	// }
	render() {
		return (
			<div>
				<h3> Inside Events List component</h3>
			</div>
			)
	}
}
			