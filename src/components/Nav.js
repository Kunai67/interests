import React from 'react';
import styled from 'styled-components';

function Nav (props) {
    return (
        <nav className="nav">
            <ul>
                {props.children}
            </ul>
        </nav>
    );
}

const StyledLi = styled.li`
  list-style: none;
`

function NavLink (props) {
    return (
        <StyledLi>
            <a href={props.link || "#"}>{props.children}</a>
        </StyledLi>
    );
} 

export {
    Nav, NavLink
};