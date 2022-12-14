import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../asset/search.svg';
import SearchTag from './SearchTag';
import SearchOption from './SearchOption';

const SearchTagContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    justify-content: center;
`;

const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 4px 16px;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const SearchInput = styled.input`
    background: transparent;
    font-size: 16px;
    outline: none;
    color: #5e5e5e;
    border: none;
    flex: auto;
    margin-left: 8px;
`;

const SearchOptionButton = styled.p`
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    color: #5e5e5e;
`;

const Search = ({ setQuery }) => {
    const [searchOption, setSearchOption] = useState(false);
    const [searchTags, setSearchTags] = useState([]);
    const inputRef = useRef(null);

    const toggleSearchOption = () => {
        setSearchOption((prev) => !prev);
    };

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            const currentValue = e.target.value;
            // console.info(currentValue);
            setQuery(currentValue);
            inputRef.current.value = '';
            setSearchTags((prev) => [...prev, currentValue]);
        }
    };

    const searchTag = (tag) => {
        //1.현재클릭된 최근 검색어로 검색실행
        //2.검색창에 input값도 업데이트 되어야함
        setQuery(tag);
        inputRef.current.value = tag;
    };

    return (
        <>
            <SearchBoxContainer>
                <SearchInputContainer>
                    <SearchIcon width="24" fill="#5e5e5e" />
                    <SearchInput
                        placeholder="검색어 입력 후 ENTER"
                        onKeyDown={onSearch}
                        ref={inputRef}
                    />
                    <SearchOptionButton onClick={toggleSearchOption}>
                        검색 옵션 {searchOption ? '닫기' : '열기'}
                    </SearchOptionButton>
                </SearchInputContainer>
                {searchOption && <SearchOption />}
            </SearchBoxContainer>
            <SearchTagContainer>
                {searchTags.map((tag) => (
                    <SearchTag tag={tag} searchTag={() => searchTag(tag)} />
                ))}
            </SearchTagContainer>
        </>
    );
};

export default Search;
