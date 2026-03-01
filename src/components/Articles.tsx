import React, { useState } from 'react';
import './Articles.css';

interface ArticleProps {
  nom: string;
  prix: number;
  img: string;
  description: string;
  onUpdate: (nom: string, quantity: number, prix: number, img: string) => void;
}

const Article: React.FC<ArticleProps> = ({
  nom,
  prix,
  img,
  description,
  onUpdate,
}) => {
  const [quantity, setQuantity] = useState(0);
  const handleChange = (value: number) => {
    const newQuantity = Math.max(0, quantity + value);
    setQuantity(newQuantity);
    onUpdate(nom, newQuantity, prix, img);
  };

  return (
    <div className='article'>
      <img src={img} alt={nom} className="article-img" />

      <h4>{nom}</h4>
      <p className='platDescription'>{description}</p>
      <p className='price'><strong>{prix} KES</strong></p>

      <div className="quantity-box">
        <button onClick={() => handleChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleChange(1)}>+</button>
      </div>
    </div>
  );
};

export default Article;
