import React from 'react';
import PropTypes from 'prop-types';
import GifItem from './GifItem';
import { Grid, Row, Col } from 'react-bootstrap';

const GifList = (props) => {
	const gifItems = props.gifs.map((img) => {
		return (
			<GifItem openPopup={props.openPopup} 
				key={img.id} 
				gif={img} 
				onGifSelect={props.onGifSelect} />
		)
	});

	return (
		<Grid>
			<Row>
				<Col xs={12} ms={2} md={4} lg={4}>
					<div className="gif-list">{gifItems}</div>
				</Col>
			</Row>
		</Grid>
	);
};

GifList.propTypes = {
	gifs: PropTypes.array.isRequired,
	openPopup: PropTypes.func,
	onGifSelect: PropTypes.func.isRequired
}

export default GifList;