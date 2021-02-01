import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import PokeDetail from './components/pokeDetail/pokeDetail';
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
			<Router>
				<Switch>
					<Route exact path="/">
						<Home search={search} setSearch={setSearch} data={data} />
					</Route>
					<Route path="/detail/:name">
						<PokeDetail data={data} />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
