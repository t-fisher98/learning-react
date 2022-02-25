import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.bgcolor || 'transparent'};
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 3px 1px rgb(220, 220, 220);
    margin: 2rem;
    padding: 0.25rem 2rem;
    color: ${props => props.color || "grey"};
    font-size: ${props => props.size || "1rem"};
`;

export {Button}