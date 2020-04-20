import React from 'react'
import '../App.css';

function Cell (props) {

    return (
        <div className="text-align-center minHeight-50" >{props.children}</div>
    )
 
}

export default Cell