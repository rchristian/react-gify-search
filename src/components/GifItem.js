import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const GifItem = ({gif, onGifSelect}) => {
	return (
		<Col lg={4} sm={12} md={6} xs={12}>
			<div className="gif-item" onClick={() => onGifSelect(gif)}>
				<img src={gif.images.downsized.url} alt='' />
			</div>
		</Col>
	)
};

GifItem.propTypes = {
	gif: PropTypes.object.isRequired,
	onGifSelect: PropTypes.func.isRequired
}

export default GifItem;