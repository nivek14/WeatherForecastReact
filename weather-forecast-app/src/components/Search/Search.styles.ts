import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const SearchContainer = styled.input`
    width: 350px;
    height: 56px;
    border-radius: 32px;
    padding-left: 24px;
    border: 1px solid #fff;
    position: relative;
    &:focus{
        outline: none;
    }
`;

export const SearchIcon = styled.div`
    position: absolute;
    left: 60%;
    bottom: 82%;
    width: 32px;
    height: 32px;
`;