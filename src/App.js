import PokeCard from './components/pokeCard/pokeCard';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<SearchBar />
			<PokeCard />
		</div>
	);
}

export default App;
