import React from 'react'
import Aux from '../../../hoc/Auxx'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Modal from '../../UI/Modal/Modal'
import NavigationItems from '../NavigationItems/NavigationItems'
import "./SideDrawer.css"

export default function SideDrawer(props) {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className="SideDrawer">
<Logo height="11%"/>
<nav>
<NavigationItems/>
</nav>
        </div>
        </Aux>
    )
}
