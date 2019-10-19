import React, { useState } from 'react';
import { TextCenteredDiv, BtnLink, ThemedInput, ThemedH2, Btn } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';
import customSubmit from '../utils/CustomSubmit';
import changeStateOnInput from '../utils/ChangeStateOnInput';

// TODO: Client-side form validation
// TODO: Check if record already exist (username and email)

const url = 'http://localhost/sandbox/js-to-php/signup.php';

function SignUp () {
    const [signUpObj, changeObj] = useState({});
    const [willRedirect, toggleRedirect] = useState(false);

    if (willRedirect) {
        return <Redirect to="/" />
    } else {
        return (
            <TextCenteredDiv>
                <ThemedH2>Register Now!</ThemedH2>
                <form>
                    <ThemedInput placeholder="Username" name="username" onChange={(e) => changeStateOnInput(e, signUpObj, changeObj)}/>
                    <ThemedInput placeholder="Email" name="email" onChange={(e) => changeStateOnInput(e, signUpObj, changeObj)}/>
                    <ThemedInput placeholder="Password" type="password" name="password" onChange={(e) => changeStateOnInput(e, signUpObj, changeObj)}/>
                    <ThemedInput placeholder="Repeat Password" type="password" name="repeated-pass"/>
                </form>
                <BtnLink to="/">Back To Home</BtnLink>
                <Btn onClick={() => customSubmit(signUpObj, url).then((text) => text ? toggleRedirect(true) : alert("Failed to submit")) }>Submit</Btn>
            </TextCenteredDiv>
        );
    }
}

export default SignUp;