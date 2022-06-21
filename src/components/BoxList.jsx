import React from 'react';
import { BoxItem } from './BoxItem';

export function BoxList({ boxes, removeBox }) {
    return(
        <div>
        <h2>Your boxes</h2>
        <ul className='yourBoxes'>
            {boxes.map((box) => (
               <BoxItem key={box.id} box={box} removeBox={removeBox} /> 
            ))}
        </ul>
      </div>
    )
}