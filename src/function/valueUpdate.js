import React from "react";


export function valueToLeft (squares) {
    let updateSquareses = []
    for (let i=0; i<4; i++) {
        let targetArray = squares.filter(square => square.row === i)
        let curArray = targetArray.filter(square => square.value !== 0)
        console.dir(curArray)

        let newMergeArray = []
        let previousSquValue = 0;
        for ( let squ of curArray) {
            if (squ.value === 0) {
                break
            }else if (squ.value === previousSquValue) {
                newMergeArray.push(2*squ.value)
                previousSquValue = 0
            }else {
                if(previousSquValue!==0) {
                    newMergeArray.push(previousSquValue)
                }
                previousSquValue=squ.value
            }
        }
        if (previousSquValue !== 0) {
            newMergeArray.push(previousSquValue)
        }
        console.log(newMergeArray)
        /*
        for (let j=0; j<curArray.length-1; j++) {
            if (curArray[j] === curArray[j+1]) {
                curArray[j] = {
                    ...curArray[j],
                    value: 2* curArray[j]
                }
                curArray[j+1] = {
                    ...curArray[j+1],
                    value: 0
                }
            }
            console.log(curArray)
        }
        let mergeRslt = curArray.filter(square => {return(square.value !==0 ? square.value : null) })*/
        let newArray = newMergeArray.concat(new Array(4-newMergeArray.length).fill(0))
        console.log(newArray)
        targetArray.map((squ, index) => {
            if (squ.value !== newArray[index]) {
                let newSqu = {
                    ...squ,
                    value: newArray[index]
                }
                updateSquareses.push(newSqu)
            }
        })     
    }

    console.log(updateSquareses)
    return(updateSquareses)
}
