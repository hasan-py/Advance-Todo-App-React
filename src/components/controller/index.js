import React from 'react';
import SearchPanel from './Search-Panel'
import PropTypes from 'prop-types'
import {Row,Col} from 'reactstrap'
import FilterController from './FilterController'
import BlunkController from './BlunkController'
import ViewController from './ViewController'

const Controller = ({term,handleSearch,toggleForm,handleFilter,view,changeView,clearSelected,clearCompleted,reset}) => {
  return (
    <div>
    	<SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
        />

        <Row className="my-3">
        	<Col md={{ size:4 }}>
    			<FilterController handleFilter={handleFilter} />
        	</Col>
        	<Col md={{ size:4 }}>
    			<ViewController changeView={changeView} view={view} />
        	</Col>
        	<Col md={{ size:4 }} className="d-flex">
        		<div className="ml-auto">
    				<BlunkController
                    clearSelected={clearSelected}
                    clearCompleted={clearCompleted}
                    reset={reset}
                    />
        		</div>
        	</Col>
        </Row>   	
    </div>
  )
}


Controller.propTypes  = {
	term: PropTypes.string.isRequired,
	view: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
	handleFilter: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
}



export default Controller;