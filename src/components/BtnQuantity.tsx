import React, { useState } from 'react';
import './BtnQuantity.css';

interface BtnQuantityProps {
  prix: number;
}

const BtnQuantity: React.FC<BtnQuantityProps> = ({ prix }) => {
  const [quantity, setQuantity] = useState(1);
  const total = prix * quantity;

  return (
    <div className='quantity'>
        <div>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      <p>Total : {total} KES</p>
    </div>
  );
};

export default BtnQuantity;
