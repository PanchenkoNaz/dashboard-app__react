import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

// passing in the props from Ecommerce in the { }
const Button = ({ bgColor, color, size, text, borderRadius }) => {

  const { currentColor } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: currentColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button