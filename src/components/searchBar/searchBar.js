import React from 'react';
import * as S from './styles';
import Input from '@material-ui/core/Input';

const searchBar = () => {
	return (
		<Input
			placeholder="Enter Pokemon's name"
			inputProps={{ 'aria-label': 'description' }}
		/>
	);
};

export default searchBar;
