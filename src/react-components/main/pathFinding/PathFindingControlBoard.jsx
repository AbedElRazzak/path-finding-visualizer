import React from "react";

export default function PathFindingControlBoard(props) {
    // const [selected, setSelected] = React.useState('')
    const isVisualizing = props.isVisualizing
    return (
        <div className="pathFindingControlBoard">
            <div className="legend">
                <div className="legend-couple"><div className="box" style={{backgroundColor: 'rgb(12, 53, 71)',border: '1px solid rgb(12, 53, 71)'}}></div>Wall Node</div>
                <div className="legend-couple"><div className="box" style={{backgroundColor: 'rgb(37, 196, 143)',border: '1px solid rgb(37, 196, 143)'}}></div>Start Node</div>
                <div className="legend-couple"><div className="box" style={{backgroundColor: '#880808',border: '1px solid #880808'}}></div>Target Node</div>
                <div className="legend-couple"><div className="box" style={{backgroundColor: 'transparent',border: '1px solid #B3B3B3'}}></div>Unvisited Node</div>
                <div className="legend-couple"><div className="box" style={{backgroundColor: '#FFDA00',border: '1px solid #FFDA00'}}></div>Shortest-path Node</div>
                <div className="legend-couple"><div className="box" style={{backgroundColor: 'grey',border: '1px solid grey'}}></div>Visited Node</div>
            </div>
            {/* <select value={selected} className="select">
                <option value={'Dijakstra'}>Dijkstra</option>
                <option value={'Dijakstra'}>A* Search</option>
            </select> */}
            {isVisualizing === false && <div className="visualize-btn" onClick={props.dijkstraHelper}>
                Visualize
            </div>}
            {isVisualizing === true && 
              <div className="reset-playground" onClick={props.reset}>Reset</div>
            }
        </div>
    )
}