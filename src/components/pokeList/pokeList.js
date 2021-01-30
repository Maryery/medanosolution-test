import React from 'react';
import * as S from './styles';
import PokeCard from '../pokeCard/pokeCard';

const PokeList = ({ data }) => {
	return (
		<S.CardList>
			<S.CardContainer>
				{data.map((pokemon, index) => (
					<PokeCard pokemon={pokemon} />
				))}
			</S.CardContainer>
		</S.CardList>
	);
};

export default PokeList;
