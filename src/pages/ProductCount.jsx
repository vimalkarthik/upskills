import React from 'react'
import { useState } from 'react'

function ProductCount() {
  const [count, setCount] = useState(0);

const increaseCount = () => {
  setCount((prev) => (prev < 10 ? prev + 1 : prev));
};

const decreaseCount = () => {
  setCount((prev) => (prev > 0 ? prev - 1 : prev));
};

  return (
    <div className='productContainer'>
      <div className="productWrapper">
          <button className='btn' onClick={increaseCount}>+</button>
          <span className='countText'>{count}</span>
          <button className='btn' onClick={decreaseCount}>-</button>
      </div>
    </div>
  )
}

export default ProductCount