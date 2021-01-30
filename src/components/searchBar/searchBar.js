import React from 'react';
import * as S from './styles';

const SearchBar = () => {
	return (
		<S.SearchBar
			placeholder="Enter Pokemon's name"
			inputProps={{ 'aria-label': 'description' }}
		/>
	);
};

export default SearchBar;
