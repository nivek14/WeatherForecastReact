import { useState } from 'react';
import * as S from './Search.styles';
import { Props } from './Search.types';
import { Search as SearchIcon } from 'lucide-react';


export const Search = (props: Props) => {
    const { placeholder } = props;

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        console.log(searchValue);
    }

    return (
        <S.Container>
            <S.SearchContainer
                type='text'
                placeholder={placeholder}
                name="search"
                id="search-input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <S.SearchIcon onClick={() => handleSearch()}>
                <SearchIcon />
            </S.SearchIcon>
        </S.Container>
    );
};

export default Search;