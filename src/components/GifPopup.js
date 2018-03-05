import React from 'react';

const GifPopup = (props) => {
	return (
		<div className="popup-wrap">
			<div className="popup-content">
				<span className="close-btn" onClick={props.closePopup}>x</span>
				<img src={props.selectedGif.images.original.url} alt='' />
				<input type="text" value={props.selectedGif.source} readOnly />
				<button className="copy">Copy</button>
			</div>
		</div>
	)
}

export default GifPopup;