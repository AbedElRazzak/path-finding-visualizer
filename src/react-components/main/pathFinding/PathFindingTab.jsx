import React from "react";
import PathFindingControlBoard from "./PathFindingControlBoard";
import PathFindingPlayground from "./PathFindingPlayground";
import _grid from "../../../objects/gridCellObject";
import startAnimation from "./startAnimation";

export default function PathFindingTab() {

    const [orgGrid, setGrid] = React.useState(_grid)
    const [isVisualizing, setIsVisualizing] = React.useState(false)

    function dijkstraHelper() {
        setIsVisualizing(true)
        const animatedGrid = startAnimation(orgGrid)
        setGrid(animatedGrid)
    }

    function reset() {
        location.reload()
    }


    return (
        <div className="main">
            <PathFindingControlBoard 
               reset={reset}
               dijkstraHelper={dijkstraHelper}
               isVisualizing={isVisualizing}
            />
            <PathFindingPlayground 
               isVisualizing={isVisualizing}
               grid={orgGrid}
               setGrid={(g)=>setGrid(g)}
            />
        </div>
    )
}