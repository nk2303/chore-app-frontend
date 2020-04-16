import React from 'react'
// props.children

function Cell (props) {

    const drop = (e) => {
        e.preventDefault();
        const aChore = props //select the chore on click
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
    <div>{props.children}</div>
    )
 
}

export default Cell
