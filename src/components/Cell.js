import React from 'react'
// props.children
import '../App.css';

function Cell (props) {
    const childr = props.children
    // if (childr != null) { console.log(childr) }

    return (
        <div className="text-align-center minHeight-50" >{childr}</div>
    )
 
}

export default Cell