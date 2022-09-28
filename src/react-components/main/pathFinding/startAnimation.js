import dijkstra from "./dijkstra"


export default function startAnimation(orgGrid) {
    const [grid, path, visitedNodes, targetNode] = dijkstra(orgGrid)

        const rev_path = path.reverse()
        const _visitedNodes = []

        for (let n=0; n<visitedNodes.length; n++) {

            for (let i=0; i<grid.length; i++) {
                for (let j=0; j<grid[i].length; j++) {

                    if (grid[i][j].ind === visitedNodes[n] && grid[i][j].on === false && grid[i][j].isStartNode === false && grid[i][j].isTargetNode === false) {
                        _visitedNodes.push([i,j])
                    }
                    
                }
            }
        }

        for (let n=0; n<_visitedNodes.length; n++) {
            const coord = _visitedNodes[n]
            const i = coord[0]
            const j = coord[1]

            setTimeout(() => {
                const currentCell = document.getElementById(`cell${i}-${j}`)
                setTimeout(() => {
                   currentCell.className = "visitedCell"
               }, n*10)
            },n*5)

            if (n === _visitedNodes.length-1) {
                setTimeout(() => {
                    for (let idx=0; idx<rev_path.length; idx++) {
        
        
                        for (let i=0; i<grid.length; i++) {
                            
                            for (let j=0; j<grid[i].length; j++) {
                                
                
                                if (grid[i][j].ind === rev_path[idx]) {
                                    const currentCell = document.getElementById(`cell${i}-${j}`)
                                    setTimeout(() => {
                                        currentCell.className = "solutionCellAnimated"
                                    }, idx*30)
                                }
                
                            }
                        }
                }
            }, n*15)
        }
    }
    return grid
}