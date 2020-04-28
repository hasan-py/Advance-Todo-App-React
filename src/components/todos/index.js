import React, { Component } from 'react';
import ListView from '../listView'
import TableView from '../tableView'


class Todo extends Component {

	state = {
		todos:[
			{
				id:"1",
				text:"main todo",
				description:"simple description",
				time:new Date(),
				isComplete:false,
				isSelect:false
			},
			{
				id:"2",
				text:"main todo2",
				description:"simple description2",
				time:new Date(),
				isComplete:false,
				isSelect:false

			}
		]
	}

	toggleSelect = ()=> {

	}

	toggleComplete = ()=> {

	}

	render() {
		return (
			<div>
				<div>
					<h1 className="display-4 mt-5 text-center">Stack Todo</h1>
				</div>

				
				<div>
					<ListView
						todos={this.state.todos}
						toggleSelect={this.toggleSelect}
						toggleComplete={this.toggleComplete}
					/>
				</div>


				<div>
					<TableView
						todos={this.state.todos}
						toggleSelect={this.toggleSelect}
						toggleComplete={this.toggleComplete}
					/>
				</div>
				



			</div>

		);
	}
}

export default Todo




