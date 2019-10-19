import React from 'react';
import { TextCenteredDiv, ThemedHeading, ThemedParagraph, BtnLink } from '../components/Styled-Components';
import '../css/app.css';

function Home () {
    return (
      <TextCenteredDiv>
        <ThemedHeading>Interests</ThemedHeading>
        <ThemedParagraph>The simple social media app.</ThemedParagraph>
        <BtnLink to="/sign-up">Sign Up</BtnLink>
        <BtnLink to="/sign-in">Sign In</BtnLink>
      </TextCenteredDiv>
    );
}

export default Home;