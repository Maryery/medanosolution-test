import PokeCard from './components/pokeCard/pokeCard';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<SearchBar />
			<PokeCard />
			<Footer />
		</div>
	);
}

export default App;
