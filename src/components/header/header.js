import React from 'react';
import * as S from './styles';

const Header = () => {
	return (
		<S.HeaderContainer>
			<S.Image
				src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
				alt="Logo"
			></S.Image>
			<S.Title>Pokémon Bay</S.Title>
		</S.HeaderContainer>
	);
};

export default Header;
