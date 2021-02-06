import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	background-color: #ffcb05;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

const logo = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;
	margin-right: 10px;
	animation: ${logo} infinite 20s linear;
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
