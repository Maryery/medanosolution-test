import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	background-color: #ffcb05;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;
	margin-right: 10px;
	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

export const Title = styled.h1`
	font-size: 20px;
	@media (min-width: 768px) {
		font-size: 50px;
	}
`;
