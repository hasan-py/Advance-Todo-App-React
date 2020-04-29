import React from 'react';
import {CustomInput,Button,Table} from 'reactstrap'
import PropTypes from 'prop-types'


const RowItem = ({todo,toggleComplete,toggleSelect}) => {
  return (
   		<tr>
			<td>
				<CustomInput
					type='checkbox'
					id={todo.id}
					checked={todo.isSelect}
					onChange={()=> toggleSelect(todo.id)}
				/>
			</td>
			<td>{todo.time.toDateString()}</td>
			<td>{todo.text}</td>
			<td>
				<Button
					color={todo.isComplete ? 'danger' : 'success'}
					onClick={()=> toggleComplete(todo.id)}
				>
					{todo.isComplete ? 'Completed' : 'Running'}	
				</Button>
			</td>
   		</tr>
  )
}

RowItem.propTypes   = {
	todo: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	toggleSelect: PropTypes.func.isRequired

}


const TableView = ({todos,toggleComplete,toggleSelect}) => {
  return (
    <Table>
    	<thead>
    		<tr>
    			<th>Select</th>
    			<th>Time</th>
    			<th>Todo</th>
    			<th>Action</th>
    		</tr>
    	</thead>
    	<tbody>
    		{todos.map(todo=>{
    			return (<RowItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />)
    		})}
    	</tbody>
    </Table>
  )
}

TableView.propTypes  = {
	todo: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	toggleSelect: PropTypes.func.isRequired

}


export default TableView;