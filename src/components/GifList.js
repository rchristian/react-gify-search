import React from 'react';
import PropTypes from 'prop-types';
import GifItem from './GifItem';

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
		<div className="gif-list">{gifItems}</div>
	);
};

GifList.propTypes = {
	gifs: PropTypes.object.isRequired,
	openPopup: PropTypes.func.isRequired,
	onGifSelect: PropTypes.func.isRequired
}

export default GifList;