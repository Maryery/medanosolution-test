import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './components/pokeCard/pokeCard';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PokeList from './components/pokeList/pokeList';
import './App.css';

const getSimplePokemon = async (url) => {
	const pokemon = await axios.get(url).then((response) => {
		return response.data;
	});
	const abilities = pokemon.abilities.map((ability) => ability.ability.name);

	return {
		name: pokemon.name,
		height: pokemon.height,
		order: pokemon.order,
		image: pokemon.sprites.front_default,
		abilities,
		url,
	};
};

function App() {
	const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(async () => {
		axios.get(ENDPOINT).then(async (response) => {
			const results = response.data.results;
			const pokemons = await Promise.all(
				results.map((pokemon) => {
					return getSimplePokemon(pokemon.url);
				})
			);
			pokemons.sort((a, b) => a.order > b.order);
			const filteredPokemons = pokemons.filter((p) => {
				return p.name.includes(search);
			});
			setData(filteredPokemons);
		});
	}, [getSimplePokemon, setData, search]);

	return (
		<div className="App">
			<Header />
			<SearchBar search={search} setSearch={setSearch} />
			<PokeList data={data} />
			<Footer />
		</div>
	);
}

export default App;
