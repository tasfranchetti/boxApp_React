import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';


export function SearchBox({ boxes }){
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header>
      <div>
        <h1>Just a box list</h1>
        <input 
        type='text' 
        placeholder='Search boxes by content...' 
        className='searchInput'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        ></input>
        <ul> {boxes.filter((value) => {
          if (searchTerm === "") {
            return;
          } else if (value.content.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value;
          }
        }).map((value) => {
          return (
            <li key={uuidv4()} className='searchResult'>{value.title}
            <p>{value.content}</p>
            </li>
          );
        })
        } </ul>
      </div>
      
    </header>
  )
}