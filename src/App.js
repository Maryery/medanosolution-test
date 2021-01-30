import PokeCard from './components/pokeCard/pokeCard';
import SearchBar from './components/searchBar/searchBar';
import './App.css';

function App() {
	return (
		<div className="App">
			<SearchBar />
			<PokeCard />
		</div>
	);
}

export default App;
