import React from 'react';
import * as S from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const PokeCard = ({ pokemon }) => {
	return (
		<S.Link href={`detail/${pokemon.name}`}>
			<S.PokeCard>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="pokemon image"
						image={pokemon.image}
					/>
					<CardContent>
						<S.Title>{pokemon.name}</S.Title>
						<S.Skills variant="body2" color="textSecondary" component="p">
							{pokemon.abilities}
						</S.Skills>
					</CardContent>
				</CardActionArea>
			</S.PokeCard>
		</S.Link>
	);
};

export default PokeCard;
