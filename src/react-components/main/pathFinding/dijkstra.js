export default function dijkstra(_graph) {

    let startNode
    let targetNode
    for (let i=0; i<_graph.length ; i++) {
        for (let j=0; j<_graph[i].length ; j++) {
            if (_graph[i][j].isStartNode === true) {
                startNode = _graph[i][j].ind
            }
            if (_graph[i][j].isTargetNode === true) {
                targetNode = _graph[i][j].ind
            }
        }
    }
    


    let graph=[]
    let ind = 0
    for (let r=0; r < _graph.length; r++) {
        let temp = []
        for (let c=0; c< _graph[r].length; c++) {
            temp.push(ind)
            ind ++
        }
        graph.push(temp)
    }



    let adjGraph = []
    for (let r=0; r < ind; r++) {
        let temp = []
        for (let c=0; c< ind; c++) {
            temp.push(0)
        }
        adjGraph.push(temp)
    }


    

    for (let i=0; i< graph.length; i++) {
        for (let j=0; j<graph[i].length; j++) {
            if (i === 0) {
                if (j === 0 ) {
                    if (_graph[i][j].on === false) {
                            adjGraph[graph[i][j]][graph[i + 1][j]] = 1
                            adjGraph[graph[i][j]][graph[i][j + 1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i + 1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j + 1]] = 0
                    }
                    
                    
                    
                }else if(j === graph[i].length - 1) {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i][j - 1]] = 1
                        adjGraph[graph[i][j]][graph[i + 1][j]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i][j - 1]] = 0
                        adjGraph[graph[i][j]][graph[i + 1][j]] = 0
                    }
                    
                }
                else {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i][j - 1]] = 1
                        adjGraph[graph[i][j]][graph[i][j + 1]] = 1
                        adjGraph[graph[i][j]][graph[i + 1][j]] = 1
                    } else {
                        adjGraph[graph[i][j]][graph[i][j - 1]] = 0
                        adjGraph[graph[i][j]][graph[i][j + 1]] = 0
                        adjGraph[graph[i][j]][graph[i + 1][j]] = 0
                    }

                }
            }else if (i === graph.length - 1) {
                if (j === 0) {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j+1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j+1]] = 0
                    }

                }else if (j === graph[i].length - 1) {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j-1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j-1]] = 0
                    }

                }else {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j+1]] = 1
                        adjGraph[graph[i][j]][graph[i][j-1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j+1]] = 0
                        adjGraph[graph[i][j]][graph[i][j-1]] = 0
                    }

                }
            }else {
                if (j === 0) {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i+1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j+1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i+1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j+1]] = 0
                    }


                }else if(j === graph[i].length - 1) {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i+1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j-1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i+1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j-1]] = 0
                    }


                } else {
                    if (_graph[i][j].on === false) {
                        adjGraph[graph[i][j]][graph[i+1][j]] = 1
                        adjGraph[graph[i][j]][graph[i-1][j]] = 1
                        adjGraph[graph[i][j]][graph[i][j+1]] = 1
                        adjGraph[graph[i][j]][graph[i][j-1]] = 1
                    }else {
                        adjGraph[graph[i][j]][graph[i+1][j]] = 0
                        adjGraph[graph[i][j]][graph[i-1][j]] = 0
                        adjGraph[graph[i][j]][graph[i][j+1]] = 0
                        adjGraph[graph[i][j]][graph[i][j-1]] = 0
                    }
                    

                }

            }
        }
    }

   

    const path = []
    const ch = []

    const dist = new Array(adjGraph.length)
    const spArr = new Array(adjGraph.length)

    function minDistance(dist, spArr) {
        let min=Number.MAX_VALUE, min_index=-1
        
        for (let u=0; u<dist.length; u++) {
            if (dist[u] < min && spArr[u] === false) {
                min = dist[u]
                min_index = u
            }
        }
        return min_index
    }
    

    for (let v=0; v<spArr.length; v++) {
        spArr[v] = false
        dist[v] = Infinity
    }


    dist[startNode] = 0
    const visitedNodes = []

    for (let v=0; v < adjGraph.length; v++) {

        let x = minDistance(dist, spArr)

        if (x === -1 || x === targetNode) {
            break
        }

        spArr[x] = true
        visitedNodes.push(x)
        
        for (let y=0; y < adjGraph.length; y++) {
            
            if (adjGraph[x][y] > 0 && spArr[y] === false && dist[x] + adjGraph[x][y] < dist[y]) {
                dist[y] = dist[x] + adjGraph[x][y]
                if (x !== startNode) {
                    ch[y] = x
                    
                }
            }
        }
        
    }
    
    

    let temp = ch[targetNode]
    while (temp !== undefined) {
        path.push(temp)
        temp = ch[temp]
    }

    const grid = []
    for (let i=0; i<graph.length ; i++) {
        let temp = []
        for (let j=0; j<graph[i].length ; j++) {
            temp.push(
                {
                    ..._graph[i][j],
                    "isSolutionNode": path.includes(_graph[i][j].ind) === true? true: false
                }
            )
        }
        grid.push(temp)
    }


    return [grid, path, visitedNodes, targetNode]
}