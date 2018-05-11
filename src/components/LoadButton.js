import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Button } from 'react-bootstrap';

const LoadButton = (props) => {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12} lg={12}>
					<div className="more-btn">
						<Button className="load-more" onClick={props.onLoadMore}>
							Load More
						</Button>
					</div>
				</Col>
			</Row>
		</Grid>
	)
};

LoadButton.propTypes = {
	onLoadMore: PropTypes.func.isRequired
}

export default LoadButton;