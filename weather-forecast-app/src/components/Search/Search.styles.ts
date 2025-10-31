import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const SearchContainer = styled.input`
    width: 400px;
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