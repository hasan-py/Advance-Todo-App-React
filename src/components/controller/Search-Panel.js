import React from 'react';
import {Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'


const SearchPanel = ({term,handleSearch,toggleForm}) => {
  return (
    <div  className='d-flex'>
    	<Input
			placeholder='Search Todo'
			className='col-sm-10'
			value={term}
			onChange={e=> handleSearch(e.target.value)}
    	/>

    	<Button className='col-sm-1 mx-5' color="success" onClick={toggleForm} >
    		Add +
    	</Button>
    	
    </div>
  )
}

SearchPanel.propTypes = {
	term: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired
}

export default SearchPanel;