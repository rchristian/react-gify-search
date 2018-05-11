import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = { term: '' }
	}

	onInputChange = (term) => {
		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return (
			<Row className="search">
				<Col xs={12} md={12} ls={12}>
					<input onChange={e => this.onInputChange(e.target.value)} />
				</Col>
			</Row>
		);
	}
}

SearchBar.propTypes = {
	onTermChange: PropTypes.func.isRequired,
}

export default SearchBar;
