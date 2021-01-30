import React from 'react';
import * as S from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const PokeCard = () => {
	return (
		<S.PokeCard>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="pokemon image"
					image="https://ak.picdn.net/shutterstock/videos/32692618/thumb/1.jpg"
				/>
				<CardContent>
					<S.Title>Pokemon name</S.Title>
					<S.Skills variant="body2" color="textSecondary" component="p">
						ability
					</S.Skills>
				</CardContent>
			</CardActionArea>
		</S.PokeCard>
	);
};

export default PokeCard;
