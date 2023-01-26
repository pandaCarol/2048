import React from "react";

export function randomId (squares, itera) {
    //console.log(squares);
    //for starting the game, all square has been clear to 0, 2 times iteration
    if (itera === 2) {
        const firstId = Math.floor(Math.random()*16)
        let secondId = Math.floor(Math.random()*16)
        while(secondId === firstId) {
            secondId = Math.floor(Math.random()*16)
        }
        const randomIdArray = [firstId, secondId]
        return randomIdArray
    }

    //durning the game, generate a random id
    const squValueZero = squares.filter(square => square.value === 0);
    const zeroArraylength = squValueZero.length;
    const zeroArrayIndex = Math.floor(Math.random()*(zeroArraylength));
    console.log(squValueZero[zeroArrayIndex])
    const randomId = squValueZero[zeroArrayIndex].id;
    return randomId;
}

export const randomValue = () => {
    const randomValue = Math.floor(Math.random()*10) > 8 ? 4 : 2;
    return randomValue;
}
