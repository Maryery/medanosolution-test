import styled from '@emotion/styled';

export const CardList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	padding: 0;
`;

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;
