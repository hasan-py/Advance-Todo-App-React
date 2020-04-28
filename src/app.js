import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Todo from './components/todos'

class App extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Todo/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App