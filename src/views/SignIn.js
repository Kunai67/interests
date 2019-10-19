import React, { useState } from 'react';
import { TextCenteredDiv, ThemedH2, BtnLink, ThemedInput, Btn } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';
import customSubmit from '../utils/CustomSubmit';
import changeStateOnInput from '../utils/ChangeStateOnInput';

const url = 'http://localhost/sandbox/js-to-php/signin.php';

function SignIn () {
    const [signInObj, changeObj] = useState({});
    const [willRedirect, toggleRedirect] = useState(false);

    if (willRedirect) {
        return <Redirect to="/main"/>
    } else {
        return (
            <TextCenteredDiv>
                <ThemedH2>Log In</ThemedH2>
                <form>
                    <ThemedInput placeholder="Username" name="username" onChange={(e) => changeStateOnInput(e, signInObj, changeObj)}/>
                    <ThemedInput placeholder="Password" type="password" name="password" onChange={(e) => changeStateOnInput(e, signInObj, changeObj)}/>
                </form>
                <BtnLink to="/">Back To Home</BtnLink>
                <Btn onClick= { () => customSubmit(signInObj, url).then(
                    (text) => {
                        if (text) {
                            sessionStorage.setItem("uid", text);
                            toggleRedirect(true);
                        } else {
                            alert("Something went wrong");
                        }
                    }
                ) }>Submit</Btn>
            </TextCenteredDiv>
        );
    }
}

export default SignIn;