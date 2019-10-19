import React, { useState } from 'react';
import { TextCenteredDiv, ThemedH2, BtnLink, ThemedInput, Btn } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';
import customSubmit from '../utils/CustomSubmit';
import changeStateOnInput from '../utils/ChangeStateOnInput';

const url = 'http://localhost/sandbox/js-to-php/signin.php';

function SignIn () {
    const [signUpObj, changeObj] = useState({});
    const [willRedirect, toggleRedirect] = useState(false);

    if (willRedirect) {
        return <Redirect to="/" />
    } else {
        return (
            <TextCenteredDiv>
                <ThemedH2>Log In</ThemedH2>
                <form>
                    <ThemedInput placeholder="Username" name="username" onChange={(e) => changeStateOnInput(e, signUpObj, changeObj)}/>
                    <ThemedInput placeholder="Password" type="password" name="password" onChange={(e) => changeStateOnInput(e, signUpObj, changeObj)}/>
                </form>
                <BtnLink to="/">Back To Home</BtnLink>
                <Btn onClick={ () => customSubmit(signUpObj, url).then((text) => text ? toggleRedirect(true) : alert("Something went wrong")) }>Submit</Btn>
            </TextCenteredDiv>
        );
    }
}

export default SignIn;