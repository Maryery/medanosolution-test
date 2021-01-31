import React from 'react';
import * as S from './styles';
import PokeList from '../pokeList/pokeList';
import SearchBar from '../searchBar/searchBar';

const Home = ({ search, setSearch, data }) => {
	return (
		<S.HomeWrapper>
			<SearchBar search={search} setSearch={setSearch} />
			<PokeList data={data} />
		</S.HomeWrapper>
	);
};

export default Home;
