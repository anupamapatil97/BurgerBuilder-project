import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import "./Toolbar.css"

export default function Toolbar(props) {
    return (
        <header className="Toolbar">
            
             <DrawerToggle clicked={props.drawerToggleClicked}/>
             
             <div><Logo height="80%"/></div>
             <nav>
                 <NavigationItems/>
             </nav>
        </header>
       
    )
}
