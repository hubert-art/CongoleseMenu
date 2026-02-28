import React from 'react';

interface ReceiptProps {
  nom: string;
  prix: number;
  quantity: number;
  total: number;
}

const Receipt: React.FC<ReceiptProps> = ({ nom, prix, quantity, total }) => {
  return (
    <div className="receipt">
      <h2>Reçu</h2>
      <p>{nom} x {quantity} = {total} KES</p>
      <p>Prix unitaire : {prix} KES</p>
      <button onClick={() => alert('Téléchargement PDF simulé')}>Télécharger PDF</button>
    </div>
  );
};

export default Receipt;
