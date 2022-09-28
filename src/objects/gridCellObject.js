const grid= []

let ind=0
let isStartNode = false
let isTargetNode = false

for (let i=0; i<22 ; i++) {
    let temp=[]
    for (let j=0; j<40 ; j++) {

        if (i === 3 && j === 3) {
            isStartNode = true
        } else {
            isStartNode = false
        }
        if (i === 18 && j === 18) {
            isTargetNode = true
        } else {
            isTargetNode = false
        }

        
        temp.push(
            {
                "ind" : ind,
                "coord": [i, j],
                "on" : false,
                "isStartNode": isStartNode,
                "isTargetNode" : isTargetNode,
                "isSolutionNode": false
            }
        )
        ind = ind +1
    }
    grid.push(temp)
}

export default grid