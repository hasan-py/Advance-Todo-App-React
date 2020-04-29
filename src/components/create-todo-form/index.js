import React, { Component } from 'react';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'
import PropTypes from 'prop-types'


class CreateTodoForm extends Component {
	
	state = {
		text:'',
		description:'',
	}

	handleChange = (e)=> {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	
	handleSubmit = (e)=> {
		e.preventDefault()
		this.props.createTodo(this.state) // This function will pass this all form value to parent component
		e.target.reset()
		this.setState({text:'',description:''})
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>Enter Task </Label>
					<Input
						placeholder="do some code"
						name='text'
						value={this.state.text}
						onChange={this.handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Enter describtion </Label>
					<Input
						type='textarea'
						placeholder="Short describtion"
						name='description'
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button color="success">Add New</Button>
			</Form>
		);
	}
}


CreateTodoForm.propTypes  = {
	createTodo: PropTypes.func.isRequired
}



export default CreateTodoForm