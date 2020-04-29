import React, { Component } from 'react';
import shortid from 'shortid'
import ListView from '../listView'
import TableView from '../tableView'
import Controller from '../Controller'
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import CreateTodoForm from '../create-todo-form'
import FilterController from '../Controller/FilterController'


class Todo extends Component {

	state = {
		todos:[
			{
				id:"1",
				text:"dummy Todo",
				description:"simple description",
				time:new Date(),
				isComplete:false,
				isSelect:false
			},
			{
				id:"2",
				text:"Our 2nd Todo",
				description:"simple fasfas description2",
				time:new Date(),
				isComplete:false,
				isSelect:false

			}
		],
		isOpenTodoForm:false,
		searchTerm:'',
		view:"list",
		filter:"all"
	}

// ---------------------These are for Select And Complete Function---------------------
	toggleSelect = (todoId)=> {
		const todos = [...this.state.todos]
		const todo = todos.find(t=> t.id === todoId)
		todo.isSelect = !todo.isSelect
		this.setState({todos})
	}

	toggleComplete = (todoId)=> {
		const todos = [...this.state.todos]
		const todo = todos.find(t=> t.id === todoId)
		todo.isComplete = !todo.isComplete
		this.setState({todos})
	}


// ----------------These are For Modal-toggle and CreateTodo Form Function---------------- 
	toggleForm = ()=> {
		this.setState({
			isOpenTodoForm: !this.state.isOpenTodoForm
		})
	}

	// Todo Creation Function 
	createTodo = (todo)=>{
		todo.id = shortid.generate()
		todo.time = new Date()
		todo.isComplete = false
		todo.isSelect = false

		const todos = [todo, ...this.state.todos]
		this.setState({todos:todos})
		this.toggleForm()
	}


// ----------------These are For "Controller" Function---------------- 
	
	handleFilter = (type)=> {
		this.setState({filter:type})
	}

	changeView = (value)=> {
		this.setState({view:value})
	}

	clearSelected = ()=> {
		const todos = this.state.todos.filter(todo=> !todo.isSelect)
		this.setState({todos})
	}

	clearCompleted = ()=> {
		const todos = this.state.todos.filter(todo=> !todo.isComplete)
		this.setState({todos})
	}

	reset = ()=> {
		this.setState({
			filter:"all",
			isOpenTodoForm:false,
			searchTerm:'',
			view:"list"
			
		})
	}


// ----------------This Function Work for Search Functionality ----------------
	handleSearch = (value)=> {
		this.setState({searchTerm:value})
	}



// ----------------- These all are view rendering function for main view ---------------- 
// These all are Retrun Obj 

	renderSearch = ()=> {
		return this.state.todos.filter(todo=> todo.text
			.toLowerCase()
			.includes(this.state.searchTerm.toLowerCase())
			)
	}
	
	renderFilterView = (todos)=> {
		const {filter} = this.state
		if (filter === 'completed'){
			return todos.filter(todo=> todo.isComplete)
		}else if(filter==='running') {
			return todos.filter(todo=> !todo.isComplete)
		}else {
			return todos
		}
	}




// ------------------------ This Function Used For Rendering The Main View ------------------
	renderMainView = ()=> {
		let todos = this.renderSearch()
		todos = this.renderFilterView(todos)
		return this.state.view === 'list' ? (
			<ListView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		) : (
			<TableView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		)
	}


	render() {
		return (
			<div>
				<div>
					<h1 className="display-4 mt-5 text-center">Advance Todo Application</h1>
					<Controller
						term={this.searchTerm}
						view={this.state.view}
						toggleForm={this.toggleForm}
						handleSearch={this.handleSearch}
						handleFilter={this.handleFilter}
						changeView={this.changeView}
						clearSelected={this.clearSelected}
						clearCompleted={this.clearCompleted}
						reset={this.reset}
					/>
				</div>

				<div>
					{this.renderMainView()}
				</div>
				
				<Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm} >
					<ModalHeader toggle={this.toggleForm} >
						Create New Todo Form
					</ModalHeader>
					<ModalBody>
						<CreateTodoForm createTodo={this.createTodo} />
					</ModalBody>
				</Modal>


			</div>

		);
	}
}

export default Todo




