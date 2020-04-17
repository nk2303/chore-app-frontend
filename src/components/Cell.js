import React from 'react'
// props.children

function Cell (props) {
    return (
        <div className="width-2px minHeight-130 text-align-center">{props.children}</div>
        // <div>{props.children}</div>
    )
 
}

export default Cell