import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';
import "./CheckoutSummary.css";

export default function CheckoutSummary(props) {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well</h1>
            <div style={{width:"100%",height:"300px",margin:"auto"}}>
                <Burger ingredient={props.ingredient}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    )
}
