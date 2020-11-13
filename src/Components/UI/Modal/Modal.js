import React from 'react'
import Aux from '../../../hoc/Auxx'
import Backdrop from '../Backdrop/Backdrop'
import "./Modal.css"

export default function Modal(props) {
    return (
        <Aux>
            {/* <Backdrop show={props.show} clicked={props.modelClosed}/> */}
        <div className="modal" style={{
            transform:props.show?'translateY(0)':'translateY(-100vh)',
            opacity:props.show?"1":"0"
        }}> 
            {props.children}
        </div>
        </Aux>
    )
}
