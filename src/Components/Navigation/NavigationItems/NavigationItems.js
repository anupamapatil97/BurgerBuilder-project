import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import "./NavigtionItemss.css"

export default function NavigationItems() {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>

        </ul>

    )
}
