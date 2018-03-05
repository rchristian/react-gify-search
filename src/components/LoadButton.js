import React from 'react';

const LoadButton = (props) => {
	return (
		<div className="more-btn">
			<button className="load-more" onClick={props.onLoadMore}>
				Load More
			</button>
		</div>
	)
};

export default LoadButton;