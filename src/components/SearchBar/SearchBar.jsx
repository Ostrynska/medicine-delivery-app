import iconSearch from '../../assets/images/search.png';

import {
 ContainerSortBtn,
 Input,
 InputIcon,
 SortBtn,
 SortForm,
} from './SearchBar.styled';

function SearchBar({ value, onChange, sortByPrice }) {
 return (
  <SortForm>
   <InputIcon src={iconSearch} alt="search" width={20} />
   <Input
    name="search"
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search your menicine"
   />
   <ContainerSortBtn>
    <SortBtn onClick={() => sortByPrice('up')} type="button">
     Price: Low - Hight
    </SortBtn>
    <SortBtn onClick={() => sortByPrice('down')} type="button">
     Price:Hight - Low
    </SortBtn>
   </ContainerSortBtn>
  </SortForm>
 );
}

export default SearchBar;
