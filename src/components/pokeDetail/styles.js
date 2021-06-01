import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { keyframes } from '@emotion/react';

export const PokeDetailWrapper = styled(Card)`
	margin-top: 20px;
	width: 50vw;
	margin-left: auto;
	margin-right: auto;
`;

const pokemon = keyframes`
from, 20%, 53%, 80%, to {
	transform: translate3d(0,0,0);
}

40%, 43% {
	transform: translate3d(0, -30px, 0);
}

70% {
	transform: translate3d(0, -15px, 0);
}

90% {
	transform: translate3d(0,-4px,0);
`;

export const PokeImage = styled.img`
	animation: ${pokemon} 1s ease infinite;
	width: 200px;
	height: 200px;
	`;

export const Link = styled.a`
	color: grey;
	font-size: 15px;
	font-weight: bold;
	text-decoration: none;
`;

export const PokeName = styled.p`
	display: flex;
	justify-content: space-around;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
`;
