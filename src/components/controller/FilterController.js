import React,{ useState } from 'react';
import {Button,ButtonGroup} from 'reactstrap'
import PropTypes from 'prop-types'

const FilterController = ({handleFilter}) => {
	
	const [select, setSelect] = useState(0)

  return (
  	<ButtonGroup>
	   <Button color="info" onClick={()=> {handleFilter("all"); setSelect(1);} } active={select === 1} >All</Button>
	   <Button color="info" onClick={()=> {handleFilter("running"); setSelect(2);} } active={select === 2}>Running</Button>
	   <Button color="info" onClick={()=> {handleFilter("completed"); setSelect(3);} } active={select === 3}>Completed</Button>
  	</ButtonGroup>
  )
}

FilterController.propTypes = {
	handleFilter: PropTypes.func.isRequired
}
export default FilterController;