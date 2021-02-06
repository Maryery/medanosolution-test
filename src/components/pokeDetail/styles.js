import styled from '@emotion/styled';

export const PokeDetailWrapper = styled.div`
	color: black;
	width: 50vw;
	height: 65vh;
	background-color: grey;
`;

export const Link = styled.a`
	text-decoration: none;
	float: right;
`;

export const PokeName = styled.p`
	color: black;
	font-size: 20px;
	@media (min-width: 768px) {
		font-size: 30px;
`;

export const PokeHeight = styled.p`
	font-size: 20px;
	color: red;
	@media (min-width: 768px) {
		font-size: 30px;
	}
`;
