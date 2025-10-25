import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TitleCapital = styled.h1`
    color: #fff;
`

export const CapitalsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 225px;
`

export const CapitalsElement = styled.div`
    display: flex;
    gap: 185px;
`