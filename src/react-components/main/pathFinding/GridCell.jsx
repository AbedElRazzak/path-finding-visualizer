import React from "react";

export default function GridCell(props) {
    const index = props.index

    const i = props.iCoord
    const j = props.jCoord

    const idName = `cell${i}-${j}`
    
    const styles= {
        backgroundColor: props.cellColor,
        borderLeft: props.border,
        borderBottom: props.border
    }
    return (
        <div className={props.cellClass}
        id={idName}
        onMouseDown={props.onMouseDown}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onMouseUp={props.onMouseUp}
        style={styles}>
            {/* {props.idName} */}
            {/* {String(props.isStartNode)} */}
            {/* {props.idName} */}
            {/* {props.cellClass} */}
            {/* {`${i},${j}`} */}
            {/* {idName} */}
            {/* {index} */}

        </div>
    )
}