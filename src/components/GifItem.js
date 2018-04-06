import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({gif, onGifSelect}) => {
	return (
		<div className="gif-item" onClick={() => onGifSelect(gif)}>
			<img src={gif.images.downsized.url} alt='' />
		</div>
	)
};

GifItem.propTypes = {
	gif: PropTypes.object.isRequired,
	onGifSelect: PropTypes.func.isRequired
}

export default GifItem;