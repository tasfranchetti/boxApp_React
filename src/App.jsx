import React, { Fragment, useState, useRef, useEffect } from 'react';
import { v4 as uuidv4} from 'uuid';
import { BoxList } from './components/BoxList';
import { SearchBox } from './components/SearchBox';

const KEY = "boxApp.boxes";

export function App() {
  const [boxes, setBoxes] = useState([ {id: 1, title: 'Box 1', content: 'This is just an example of a box, remove it and create yours!' } ])
  
  const boxTitleRef = useRef();
  const boxContentRef = useRef();

  useEffect(() => {
    const storedBoxes = JSON.parse(localStorage.getItem(KEY));
    if (storedBoxes) {
      setBoxes(storedBoxes);
    }
  }, []);

  const removeBox = (id) => {
    const remainingBoxes = boxes.filter((box) => box.id !== id);
    localStorage.setItem(KEY, JSON.stringify(remainingBoxes));
    setBoxes(remainingBoxes);
  }

  const addNewBox = (evt) => {
    evt.preventDefault();
    const boxTitle = boxTitleRef.current.value;
    const boxContent = boxContentRef.current.value;
    if (boxTitle === '' || boxContent === '') return;
    const newBoxes = [...boxes, { id: uuidv4(), title: boxTitle, content: boxContent }];
    setBoxes(newBoxes);
    localStorage.setItem(KEY, JSON.stringify(newBoxes));
    boxTitleRef.current.value = null;
    boxContentRef.current.value = null;
  }

  return (
    <Fragment>
      <SearchBox boxes={boxes} />
      <div className='addBoxContainer'>
        <h2>Add a box</h2>
        <form>
          <input type='text' placeholder='Title' className='addBoxItem' ref={boxTitleRef}></input>
          <input type='text' placeholder='Content' className='addBoxItem' ref={boxContentRef}></input>
          <button type='submit' onClick={addNewBox}>➕ Add</button>
        </form>
      </div>
      <BoxList boxes={boxes} removeBox={removeBox}/>
    </Fragment>
  );
}

export default App;
