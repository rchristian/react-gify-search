import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

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
			<Grid>
				<Row>
					<Col xs={12} md={12} ls={12}>
						<div className="search">
							<input onChange={e => this.onInputChange(e.target.value)} />
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

SearchBar.PropTypes = {
	onTermChange: PropTypes.func.isRequired,
}

export default SearchBar;
