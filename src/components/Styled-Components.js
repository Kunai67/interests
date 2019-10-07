import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextCenteredDiv = styled.div`
    text-align: center;
    background-color: purple;
    color: white;
    padding: 2rem 0;
`;

const BtnLink = styled(Link)`
    padding: .5rem 1rem;
    background-color: red;
    display: inline-block;
    margin: 0 .5rem;
    text-decoration: none;
    color: white;
`;

const ThemedHeading = styled.h1`
    font-size: 4rem;
    margin-bottom: .5rem;
`;

const ThemedH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const ThemedParagraph = styled.p`
    margin: 1rem 0;
    font-size: 1.2rem;
`;

const ThemedInput = styled.input`
    border: 1px solid red;
    padding: .25rem .5rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

export {
    TextCenteredDiv,
    BtnLink,
    ThemedHeading,
    ThemedH2,
    ThemedParagraph,
    ThemedInput
}