import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export const PokeCard = styled(Card)`
	width: 200px;
	height: 300px;
	margin-bottom: 10px;
`;

export const Image = styled(CardMedia)`
	background-color: #d3d3d3;
	height: 170px;
`;

export const Link = styled.a`
	text-decoration: none;
	padding: 10px;
`;

export const Order = styled(Typography)`
	color: #ffa500;
`;

export const Title = styled(Typography)`
	text-transform: uppercase;
`;

export const SkillsContainer = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4px;
	padding: 0;
	text-align: center;
	margin-top: 10px;
`;

export const Skills = styled.li`
	list-style: none;
`;

export const SkillsItem = styled.div`
	background-color: grey;
	border-radius: 10px;
	width: auto;
	color: white;
	align-item: center;
`;
