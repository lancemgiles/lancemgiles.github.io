import React from 'react';

import NavItem from './NavItem';

function NavBar() {
    return (<ul>
            <NavItem itemName="one" path="path_one" />
            <NavItem itemName="two" path="path_two" />
            <NavItem itemName="three" path="path_three" />
        </ul>);
}

export default NavBar;
