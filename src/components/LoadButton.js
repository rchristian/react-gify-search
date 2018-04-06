import React from 'react';
import PropTypes from 'prop-types';

const LoadButton = (props) => {
	return (
		<div className="more-btn">
			<button className="load-more" onClick={props.onLoadMore}>
				Load More
			</button>
		</div>
	)
};

LoadButton.propTypes = {
	onLoadMore: PropTypes.func.isRequired
}

export default LoadButton;