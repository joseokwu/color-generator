import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const newRgb = rgb.join(',');
  const newHexColor = `#${hexColor}`;

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(alertTimeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${newRgb})` }}
      onClick={() => {
        navigator.clipboard.writeText(newHexColor);
        setAlert(true);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{newHexColor}</p>
      <p>{alert && 'Copied to clipboard'}</p>
    </article>
  );
};

export default SingleColor;
