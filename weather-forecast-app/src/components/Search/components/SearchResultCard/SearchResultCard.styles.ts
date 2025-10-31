import styled from 'styled-components';

export const Container = styled.div<{ showComponent: boolean }>`
    display: flex;
    background-color: #fff;
    height: 300px;
    width: 428px;
    display: ${(props) => (props.showComponent ? 'flex' : 'none')};
`;