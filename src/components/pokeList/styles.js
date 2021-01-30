import styled from '@emotion/styled';

export const CardList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	width: 100%;
	margin: 0 auto;
	flex-grow: 1;
	overflow-x: hidden;
	flex-wrap: wrap;
	padding: 0;
`;

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;

	@media (min-width: 1025px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;
