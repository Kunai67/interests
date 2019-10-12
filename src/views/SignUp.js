import React from 'react';
import { TextCenteredDiv, BtnLink, ThemedInput, ThemedH2, Btn } from '../components/Styled-Components';

function SignUp () {
    return (
        <TextCenteredDiv>
            <ThemedH2>Register Now!</ThemedH2>
            <form>
                <ThemedInput placeholder="Username"/>
                <ThemedInput placeholder="Email"/>
                <ThemedInput placeholder="Password" type="password"/>
                <ThemedInput placeholder="Repeat Password" type="password"/>
                <Btn type="submit">Submit</Btn>
            </form>
            <BtnLink to="/">Back To Home</BtnLink>
            
        </TextCenteredDiv>
    );
}

export default SignUp;