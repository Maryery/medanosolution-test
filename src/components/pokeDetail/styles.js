import styled from '@emotion/styled';

export const PokeDetailWrapper = styled.div`
	display: grid;
	grid-template-columns: 40px auto 185px 40px;
	grid-template-rows: 50px 50px 50px;
	height: 350px;
	margin-top: 20px;
	width: 50vw;
`;

export const Link = styled.a`
	color: red;
	font-size: 20px;
	font-weight: bold;
	grid-column-start: 4;
	grid-column-end: 4;
	grid-row-start: row1-start;
	grid-row-end: 1;
	justify-self: end;
	text-decoration: none;
`;

export const PokeName = styled.p`
	font-size: 25px;
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: row1-start;
	grid-row-end: 1;
	justify-self: center;
	text-transform: uppercase;
	@media (min-width: 768px) {
		color: black;
		font-size: 30px;
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: row1-start;
		grid-row-end: 1;
		justify-self: center;
		text-transform: uppercase;
`;

export const PokeHeight = styled.p`
	font-size: 20px;
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: row2-start;
	grid-row-end: 2;
	justify-self: start;
	@media (min-width: 768px) {
		color: black;
		font-size: 30px;
		grid-column-start: 2;
		grid-column-end: 4;
		grid-row-start: row2-start;
		grid-row-end: 2;
		justify-self: start;
	}
`;
