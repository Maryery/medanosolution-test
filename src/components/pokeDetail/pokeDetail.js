import React from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

const PokeDetail = ({ data }) => {
	let { name } = useParams();
	const filteredPokemons = data.filter((pokemon) => {
		return pokemon.name === name;
	});

	return filteredPokemons[0] !== undefined ? (
		<S.PokeDetailWrapper>
			<S.PokeName> {filteredPokemons[0].name}</S.PokeName>
			<S.Link href="/">X</S.Link>
			<S.PokeHeight>
				The height of the Pokemon is: {filteredPokemons[0].height}
			</S.PokeHeight>
		</S.PokeDetailWrapper>
	) : (
		<p>POKEMON NOT FOUND</p>
	);
};

export default PokeDetail;
