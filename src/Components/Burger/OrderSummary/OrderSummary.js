import React from 'react'
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
    const ingredientSummary=Object.keys(props.ingredient).map(igKey=>{
        return (<li key={igKey}>{igKey}:{props.ingredient[igKey]}</li>)
    })
    return (
        <Aux>
        <h3>Your Order</h3>
        <p>A Delicious burger with the following ingredients</p>
        <ul>
{ingredientSummary}
        </ul>
    <p>Total Price:{props.price}</p>
        <p>Continue to checkOut??</p>
        {/* <button>CANCEL</button>
        <button>CONTINUE</button> */}
        <Button clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button clicked={props.purchaseContinued}>CONTINUE</Button>

        </Aux>
    )
}
