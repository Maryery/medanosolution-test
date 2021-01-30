import React from 'react';
import * as S from './styles';

const SearchBar = ({ search, setSearch }) => {
	const handleChange = (event) => {
		setSearch(event.target.value);
	};
	return (
		<S.SearchBar
			placeholder="Enter Pokemon's name"
			inputProps={{ 'aria-label': 'description' }}
			value={search}
			onChange={handleChange}
		/>
	);
};

export default SearchBar;
