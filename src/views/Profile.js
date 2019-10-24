import React, { useState } from 'react';
import { BtnLink } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';
import customSubmit from '../utils/CustomSubmit';
import changeStateOnInput from '../utils/ChangeStateOnInput';
import { ThemedInput } from '../components/Styled-Components';

// TODO: Seeing the current interests

function Profile () {
    const [interests, changeInterests] = useState({id: sessionStorage.getItem("uid")});

    if (sessionStorage.length) {
        return (
            <div>
                <BtnLink to="/" onClick={ () => sessionStorage.clear() }>Logout</BtnLink>
                <BtnLink to="/main">Home</BtnLink>
                <h2>Current Interests</h2>
                <form>
                    <ThemedInput placeholder="Enter interest" name="interests" onChange={(e) => changeStateOnInput(e, interests, changeInterests)}/>
                </form>
                <button onClick={() => console.log(customSubmit(interests, "http://localhost/sandbox/js-to-php/add_interests.php"))}>Submit</button>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
}

export default Profile;