import React from 'react';
import PropTypes from 'prop-types';
import GifItem from './GifItem';
import { Row } from 'react-bootstrap';

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
		<Row className="gif-list">{gifItems}</Row>
	);
};

GifList.propTypes = {
	gifs: PropTypes.array.isRequired,
	openPopup: PropTypes.func,
	onGifSelect: PropTypes.func.isRequired
}

export default GifList;