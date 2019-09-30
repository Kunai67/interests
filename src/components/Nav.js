import React from 'react';

function Nav (props) {
    return (
        <nav className="nav">
            <ul>
                {props.children}
            </ul>
        </nav>
    );
}

function NavLink (props) {
    return (
        <li className="nav__link">
            <a href={props.link || "#"}>{props.children}</a>
        </li>
    );
} 

export {
    Nav, NavLink
};