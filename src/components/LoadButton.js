import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

const LoadButton = (props) => {
	return (
		<Row className="more-btn">
			<Col xs={12} md={12} lg={12}>
				<Button className="load-more" onClick={props.onLoadMore}>
					Load More
				</Button>
			</Col>
		</Row>
	)
};

LoadButton.propTypes = {
	onLoadMore: PropTypes.func.isRequired
}

export default LoadButton;