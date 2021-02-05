import React from 'react';
import * as S from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const PokeCard = ({ pokemon }) => {
	console.log(pokemon);
	return (
		<S.Link href={`detail/${pokemon.name}`}>
			<S.PokeCard>
				<CardActionArea>
					<S.Image component="img" alt="pokemon image" image={pokemon.image} />
					<CardContent>
						<S.Order>Nº {pokemon.order}</S.Order>
						<S.Title>{pokemon.name}</S.Title>
						<S.SkillsContainer>
							{pokemon.abilities.map((ability, index) => (
								<S.Skills variant="body2" color="textSecondary" component="p">
									<S.SkillsItem variant="contained" size="small">
										{ability}
									</S.SkillsItem>
								</S.Skills>
							))}
						</S.SkillsContainer>
					</CardContent>
				</CardActionArea>
			</S.PokeCard>
		</S.Link>
	);
};

export default PokeCard;
