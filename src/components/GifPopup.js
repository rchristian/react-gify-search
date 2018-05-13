import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FormGroup, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

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

	render() {
		return (
			<Row className="popup-wrap">
				<div className="popup-content">
					<span className="close-btn" onClick={this.props.closePopup}>
						&times;
					</span>
					<img src={this.props.selectedGif.images.original.url} alt='' />
					<form className="copy-content">
						<FormGroup>
							<InputGroup>
								<FormControl className="gif-link" type="text" value={this.props.selectedGif.source} readOnly />
								<InputGroup.Addon>
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
								</InputGroup.Addon>
							</InputGroup>
						</FormGroup>
					</form>
				</div>
			</Row>
		)
	}
}

GifPopup.propTypes = {
	closePopup: PropTypes.func.isRequired,
	selectedGif: PropTypes.object.isRequired
}

export default GifPopup;
