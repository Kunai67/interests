import React from 'react';
import { TextCenteredDiv, ThemedH2, BtnLink, ThemedInput } from '../components/Styled-Components';

function SignIn () {
    return (
        <TextCenteredDiv>
            <ThemedH2>Log In</ThemedH2>
            <form>
                <ThemedInput placeholder="Username"/>
                <ThemedInput placeholder="Password" type="password"/>
            </form>
            <BtnLink to="/">Back To Home</BtnLink>
            <BtnLink to="#">Submit</BtnLink>
        </TextCenteredDiv>
    );
}

export default SignIn;