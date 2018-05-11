import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import GifPopup from './components/GifPopup';
import LoadButton from './components/LoadButton';
import request from 'superagent';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import { Grid, Row } from 'react-bootstrap';

const applyUpdateResults = (res, num, offset) => (prevState) => ({
  gifs: [...prevState.gifs, ...res.body.data],
  num: num,
  offset: offset,
});

const applySetResults = (res, num, offset) => () => ({
	gifs: res.body.data,
	num: num,
	offset: offset,
});

const gifyURL = (term, num, offset) => 
	`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC&limit=${num}&offset=${offset}`;

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			gifs: [],
			term: '',
			showPopup: false,
			selectedGif: null,
			num: null,
			offset: null,
		}
	}

	openPopup = (gif) => {
		this.setState({
			showPopup: true,
			selectedGif: gif,
		})
	}

	closePopup = () => {
		this.setState({
			showPopup: false,
			selectedGif: null,
		})
	}

	handleFirstSearch = (term) => {
		if(term === '') {
			return;
		}
		this.setState({
			term: term,
		})
		this.fetchGifs(term, 25, 0);
	};

	onMoreSearch = () => {
		this.fetchGifs(this.state.term, this.state.num + 25, this.state.offset + 25);
	}

	fetchGifs = (term, num, offset) => {
		request.get(gifyURL(term, num, offset), (err, res) => {
			this.onSetResults(res, num, offset)
		});
	}

	onSetResults = (res, num, offset) => {
		num === 25 && offset === 0
			? this.setState(applySetResults(res, num, offset))
			: this.setState(applyUpdateResults(res, num, offset));
	}

	render() {
		return (
			<Grid>
				<SearchBar onTermChange={this.handleFirstSearch} />
				<GifList gifs={this.state.gifs}  
						onGifSelect={selectedGif => this.openPopup(selectedGif) } />
				{this.state.showPopup ? 
					<GifPopup
						selectedGif={this.state.selectedGif}
						closePopup={this.closePopup} />
					: null
				}
				{this.state.gifs.length !== 0 ?
					<LoadButton onLoadMore={this.onMoreSearch} />
					: null
				}
			</Grid>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
