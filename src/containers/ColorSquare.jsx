import React from 'react';

const ColorSquare = ({ colors }) => {

    return (
        <>
        <h1>Color</h1>
        <div 
        style={{ backgroundColor: colors, height: 400, width: 400, marginTop: 50 }}>
        </div>

        </>
    )
}
export default ColorSquare;