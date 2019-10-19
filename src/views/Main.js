import React from 'react';
import { BtnLink } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';

function MainPage () {
    if (sessionStorage.length) {
        return (
            <div>
                <BtnLink to="/" onClick={ () => sessionStorage.clear() }>Logout</BtnLink>
                <BtnLink to="/profile">My Profile</BtnLink>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
}

export default MainPage;