import React from 'react';
import "./Order.css";

export default function Order(props) {
    // console.log(props)
    let ingredients=[];
    for(let ingredentName in props.ingredient){
        ingredients.push({name:ingredentName,amount:props.ingredient[ingredentName]})
    }
    let ingredentOutput=ingredients.map(ig=>{
        return <span key={ig.key} style={{textTransform:"capitalize",
    display:"inline-block",
    margin:"0 8px",
    border:"1px solid #ccc",
    padding:"5px"
    }}>{ig.name}({ig.amount})</span>
    })
    return (
        <div className="Order">
            <p>Ingredients:{ingredentOutput} </p>
            <p>Price : <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    )
}
