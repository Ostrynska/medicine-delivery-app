import styled from 'styled-components';

import { Input, InputIcon } from '../../components/SearchBar/SearchBar.styled';

export const HistoryWrapp = styled.div`
 width: 100%;
 min-height: 88vh;
 padding-bottom: 8px;
 display: flex;
 justify-content: center;
`;
export const SearchWrapp = styled.div`
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
`;

export const SearchIcon = styled(InputIcon)`
 position: absolute;
 top: auto;
 ${'' /* right: -56px; */}
`;

export const SearchInput = styled(Input)`
 width: 450px;
`;
