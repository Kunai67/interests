import React from 'react';
import { BtnLink } from '../components/Styled-Components';
import { Redirect } from 'react-router-dom';

function Profile () {
    if (sessionStorage.length) {
        return (
            <div>
                <BtnLink to="/" onClick={ () => sessionStorage.clear() }>Logout</BtnLink>
                <BtnLink to="/main">Home</BtnLink>
                <h1>{JSON.parse(sessionStorage.getItem("user")).username}</h1>
                <h2>Current Interests</h2>
                <ul>
                    <li>Sample</li>
                </ul>
                <h2>Connections</h2>
                <ul>
                    <li>Sample</li>
                </ul>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
}

export default Profile;