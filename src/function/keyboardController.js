import { mergeMetrix } from "./valueUpdate"

const ControllerObject = {
    left: {
        id: 'left',
        mergeGroup: 'row',
        toLoU: true
    },
    right: {
        id: 'right',
        mergeGroup: 'row',
        toLoU: false
    },
    up: {
        id: 'up',
        mergeGroup: 'column',
        toLoU: true
    },
    down: {
        id: 'down',
        mergeGroup: 'column',
        toLoU: false
    }
}

export function arrowDetector (e) {
    switch (e.key) {
        case 'ArrowLeft': 
            return 'left'
        case 'ArrowRight':
            return 'right'
        case 'ArrowDown':
            return 'down'
        case 'ArrowUp':
            return 'up'
        default:
            return null
    }
}

export function valueUpdateKeyUp(arrowType, squareses) {

    //find out the index of arrow key in 'ContrllerObject', then get info row or column, and moving direction
    const controllerIndex = Object.keys(ControllerObject).indexOf(arrowType)
    if (controllerIndex >= 0) {
        const group = Object.values(ControllerObject)[controllerIndex].mergeGroup
        const direction = Object.values(ControllerObject)[controllerIndex].toLoU

         //mergeMetrix output two parts in an array, [updateSque， roundScore]
         console.log([squareses, group, direction])
        const updateGroup = mergeMetrix(squareses, group, direction)
        return updateGroup;
    }
}
