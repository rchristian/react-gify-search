import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import GifPopup from './components/GifPopup';
import LoadButton from './components/LoadButton';
import request from 'superagent';
import './styles/styles.css';

const applyUpdateResults = (res) => (prevState) => ({
  gifs: [...prevState.gifs, ...res.body.data],
  num: res.num,
});

const applySetResults = (res) => (prevState) => ({
	gifs: res.body.data,
	num: res.num,
});

const gifyURL = (term, num) => 
	`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC&limit=${num}`;

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			gifs: [],
			showPopup: false,
			selectedGif: null,
			num: null,
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
		this.fetchGifs(term, 25);
	};

	onMoreSearch = (e) => {
		this.fetchGifs(this.input.value, this.state.num + 25); //fix term handling
	}

	fetchGifs = (term, num) => {
		request.get(gifyURL(term, num), (err, res) => {
			this.onSetResults(res, num)
		});
	}

	onSetResults = (res, num) => {
		num === 25
			? this.setState(applySetResults(res))
			: this.setState(applyUpdateResults(res));
	}

	render() {
		return (
			<div>
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
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
