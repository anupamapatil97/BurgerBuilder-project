import React from 'react';
import "../BuildControls.css"

export default function BuildControl(props) {
    return (
        <div className="BuildControl">
          {props.label}
            <button onClick={props.removed} disabled={props.disabled}>Less</button>
            <button onClick={props.added} >More</button>  
        </div>
    )
}
