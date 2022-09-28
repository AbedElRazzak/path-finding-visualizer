import React from "react";
import GridCell from "./GridCell";



export default function PathFindingPlayground(props) {
    const [mouseIsPressed, setMouseIsPressed] = React.useState(false)
    const [isStartNode, setStartNode] = React.useState(false)
    const [isTargetNode, setTargetNode] = React.useState(false)
    const [isSettingWalls, setWallsTo] = React.useState(false)
    const isVisualizing = props.isVisualizing

    const grid = props.grid
    function setGrid(g) {
        props.setGrid(g)
    }

    function onMouseDown(_cell) {
        if (isVisualizing === false) {
            setMouseIsPressed(true)
            setGrid((grid) => {
                return grid.map((row) => {
                    return row.map((cell) => {
                        if (cell.ind === _cell.ind) {
                            if (cell.isStartNode === true) {
                                setStartNode(true)
                                return cell
                            }
                            else if (cell.isTargetNode === true) {
                                setTargetNode(true)
                                return cell
                            }
                            else{
                                setWallsTo(true)
                                return {...cell, 'on': !cell.on}
                            }
                        }else {
                            return cell
                        }
                    })
                })
            })
        }
    }

    function onMouseLeave(_cell) {
        if(isVisualizing === false) {
            mouseIsPressed === true?
            setGrid((grid) => {
                return grid.map((row) => {
                    return row.map((cell) => {
                        if (cell.ind === _cell.ind) {
                            if (isSettingWalls === true) {
                                return {...cell}
                            }else {
                                return {
                                    ...cell,
                                    'isStartNode': false,
                                    'isTargetNode': false
                                }
                            }
                                
                            
                        }else {
                            return cell
                        }
                    })
                })
            })
            :_cell
        }
    }

    function onMouseEnter(_cell) {
       if(isVisualizing === false) {
        mouseIsPressed === true?
        setGrid((grid) => {
            return grid.map((row) => {
                return row.map((cell) => {
                    if (cell.ind === _cell.ind) {
                        if (isStartNode === true || _cell.isStartNode === true) {
                            return {...cell, 'isStartNode': true}
                        }
                        else if (isTargetNode === true || _cell.isTargetNode === true) {
                            return {...cell, 'isTargetNode': true}
                        }
                        else {
                            return {...cell, 'on': !cell.on}
                        }
                    }else {
                        return cell
                    }
                })
            })
        })
        :_cell
       }
    }

    function onMouseUp(_cell) {
        if(isVisualizing === false) {
            setMouseIsPressed(false)
            setTargetNode(false)
            setStartNode(false)
            setWallsTo(false)
        }
        
    }

    const mainGrid = grid.map((row) => {
        return row.map((cell) => {
            return <GridCell
            index={cell.ind}
            iCoord={cell.coord[0]}
            jCoord={cell.coord[1]}
            cellClass={
                cell.isStartNode === true?
                 'startCell':
                 cell.isTargetNode === true?
                  'targetCell':
                 cell.on === true?
                  'wallCell':
                  'gridCell'
            }
            isStartNode={cell.isStartNode}
            onMouseDown={() => onMouseDown(cell)}
            onMouseEnter={() => onMouseEnter(cell)}
            onMouseLeave={() => onMouseLeave(cell)}
            onMouseUp={() => onMouseUp(cell)}
            key={cell.ind}
             />
        })
    })
    
    return (
        <div className="pathFindingplayground" id='grid'>
            {mainGrid}
        </div>
    )
}