import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={props.clicked}>{props.children}</button>
        </div>
    )
}
