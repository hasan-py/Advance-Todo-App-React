import React from 'react';
import {Button,ButtonGroup} from 'reactstrap'
import PropTypes from 'prop-types'

const BlunkController = ({clearSelected,clearCompleted,reset}) => {
  return (
  	<ButtonGroup>
	   <Button color="danger" onClick={clearSelected} >Clear Selected</Button>
	   <Button color="danger" onClick={clearCompleted} >Clear Completed</Button>
	   <Button color="danger" onClick={reset} >Reset</Button>
  	</ButtonGroup>
  )
}

BlunkController.propTypes = {
	reset: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired
}

export default BlunkController;