import React from 'react';
import { TextCenteredDiv, BtnLink, ThemedInput, ThemedH2 } from '../components/Styled-Components';

function SignUp () {
    return (
        <TextCenteredDiv>
            <ThemedH2>Register Now!</ThemedH2>
            <ThemedInput placeholder="Username"/>
            <ThemedInput placeholder="Email"/>
            <ThemedInput placeholder="Password" type="password"/>
            <ThemedInput placeholder="Repeat Password" type="password"/>
            <BtnLink to="/">Back To Home</BtnLink>
            <BtnLink to="#">Submit</BtnLink>
        </TextCenteredDiv>
    );
}

export default SignUp;