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
			<S.PokeName> {filteredPokemons[0].name}
			<S.Link href="/">X</S.Link>
			</S.PokeName>
			<S.PokeImage src={filteredPokemons[0].image} alt="pokemon"></S.PokeImage>
		</S.PokeDetailWrapper>
	) : (
		<p>POKEMON NOT FOUND</p>
	);
};

export default PokeDetail;
