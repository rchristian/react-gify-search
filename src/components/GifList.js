import React from 'react';
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

export default GifList;