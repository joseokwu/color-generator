import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(color).all(10);
      setList(newColor);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form>
          <input
            type='text'
            value={color}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            className={isError ? 'error' : null}
          />
          <button className='btn' type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              hexColor={item.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
