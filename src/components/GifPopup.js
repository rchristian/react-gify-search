import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class GifPopup extends React.Component {
	constructor() {
		super();

		this.state = {
			copied: false,
		}
	}

	onCopy = () => {
		this.setState({copied: true});
	}

	render(props) {
		return (
			<div className="popup-wrap">
				<div className="popup-content">
					<span className="close-btn" onClick={this.props.closePopup}>x</span>
					<img src={this.props.selectedGif.images.original.url} alt='' />
					<input type="text" value={this.props.selectedGif.source} readOnly />
					<CopyToClipboard text={this.props.selectedGif.source} onCopy={this.onCopy}>
						<button className="copy-btn">Copy</button>
					</CopyToClipboard>
				</div>
			</div>
		)
	}
}

export default GifPopup;