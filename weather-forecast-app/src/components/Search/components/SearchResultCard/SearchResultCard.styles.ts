import styled from 'styled-components';

export const Container = styled.div<{ showComponent: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 300px;
    width: 428px;
    display: ${(props) => (props.showComponent ? 'flex' : 'none')};
    color: #898989;
    position: relative;
`;

export const City = styled.p`
    margin-left: 32px;
    font-size: 24px;
    font-weight: bold;
`

export const CityMainStatus = styled.h1`
    margin-left: 32px;
`

export const OtherWeatherInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-left: 32px;
`

export const MinMaxTemp = styled.div`
    display: flex;
    gap: 16px;
`

export const MinMaxTempItem = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const CloseButton = styled.div`
    position: absolute;
    top: 3%;
    left: 92%;
    cursor: pointer;
`