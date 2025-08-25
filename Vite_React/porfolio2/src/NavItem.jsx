 
import React from 'react';

function NavItem(props) {
    return <li><a href={props.path} target="_blank">{props.itemName}</a></li>;
}

export default NavItem;
