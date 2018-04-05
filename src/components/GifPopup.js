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
					<div>
						<input className="gif-link" type="text" value={this.props.selectedGif.source} readOnly />
						<CopyToClipboard text={this.props.selectedGif.source} onCopy={this.onCopy}>
							<button className="copy-btn">
								<svg xmlns="http://www.w3.org/2000/svg" 
									 viewBox="0 0 24 24" 
									 fill="none" 
									 stroke="currentColor" 
									 strokeWidth="2" 
									 strokeLinecap="round" 
									 strokeLinejoin="round" >
									 	<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
									 	<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
								</svg>
							</button>
						</CopyToClipboard>
					</div>
				</div>
			</div>
		)
	}
}

export default GifPopup;