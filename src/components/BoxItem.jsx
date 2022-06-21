import React from 'react';

export function BoxItem({ box, removeBox }) {
    const { id, title, content } = box;

    const handleRemoveBox = () =>{
        removeBox(id);
    }

    return(
        <li className='wrapper' key={id}>{title}
            <p>{content}</p>
            <div className='buttonContainer'>
                <button onClick={handleRemoveBox}>🗑️</button>
            </div>
            
        </li>
    )
}