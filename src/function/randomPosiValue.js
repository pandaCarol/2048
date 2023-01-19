import React from "react";

export const randomId = (squares) => {
    const squValueZero = squares.filter(square => square.value === 0);
    const zeroArraylength = squValueZero.length;
    const zeroArrayIndex = Math.floor(Math.random()*zeroArraylength);
    const randomId = squValueZero[zeroArrayIndex].id;
    return randomId;
}

export const randomValue = () => {
    const randomValue = Math.floor(Math.random()*10) > 7 ? 4 : 2;
    return randomValue;
}
