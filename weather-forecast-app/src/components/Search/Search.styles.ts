import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const SearchContainer = styled.input`
    width: 350px;
    height: 56px;
    padding-left: 24px;
    border: 1px solid #fff;
    &:focus{
        outline: none;
    }
`;

export const SearchIcon = styled.div`
    position: relative;
    top: 20px;
    right: 45px;
`;