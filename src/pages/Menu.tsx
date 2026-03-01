import React, { useState } from 'react';
import Article from '../components/Articles';
import axios from 'axios';
import "./Menu.css";

interface CartItem {
  nom: string;
  quantity: number;
  prix: number;
  img: string; 
}
const plats = [
  {
    nom: 'Poulet MOambe + Futu or Kwanga',
    prix: 450,
    img: '/Poulet Mayo.webp',
    description: 'Chicken cooked in rich peanut sauce, served with rice or fufu',
  },
  {
    nom: 'Pondu/Sombe + Fufu or Kwanga',
    prix: 400,
    img: '/Img PT_ Saka Saka Afrique de louest.png',
    description: 'Cassava leaves stewed with palm oil, served with chikwangue or fufu',
  },
  {
    nom: 'Fried fish + Plantains or Rice',
    prix: 350,
    img: '/fried fish.jpg',
    description: 'Seasoned tilapia/catfish grilled or deep-fried, served with platains or rice',
  },
  {
    nom: 'Fumbwa + Fufu or Kwanga',
    prix: 300,
    img: '/fumbwa.jpg',
    description: 'Wild spinach cooked with peanuts and smoked fish, served with chikwangue or fufu',
  },
  {
    nom: 'Fried plantains',
    prix: 150,
    img: '/plantains.webp',
    description: 'Sweet, caramelized slices of ripe plantains, fried until golden brown',
  },
  {
    nom: 'Boulayi',
    prix: 150,
    img: '/boulayi.jpg',
    description: 'Congolese-style jollof rice cooked with tomatoes, onions, and spices, often served with meat or fish',
  },
  {
    nom: 'Fufu',
    prix: 70,
    img: '/fufu.webp',
    description: 'Asmooth, stretchy dough made from cassava and maize, eaten by dipping into stew',
  },
  {
    nom: 'Chikwangue',
    prix: 100,
    img: '/___chikwangue.jpg',
    description: 'A film, chewy cassava dough wrapped in leaves and boiled, perfect for pairing with sauces',
  },
    {
    nom: 'Mikate / Beignets (Snacks)',
    prix: 80,
    img: '/puff-puff.jpg',
    description: 'Congolese doughnuts, crispy outside and soft inside',
  },
  {
    nom: 'Arachides grillées / Roasted peanuts (Snacks)',
    prix: 50,
    img: '/Arachides.webp',
    description: 'Crunchy, roasted peanuts, a popular street snack in DRC',
  },
  {
    nom: 'Jus de Maracuja / Passion juicem (Beverages)',
    prix: 2,
    img: '/passion.webp',
    description: '',
  },
  {
    nom: "Jus d'ananas / Pineapple juice (Beverages)",
    prix: 1,
    img: '/pineapple.jpg',
    description: '',
  },
];

const Menu: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [phone, setPhone] = useState('');


  const handleUpdate = (nom: string, quantity: number, prix: number, img: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.nom === nom);

      if (existing) {
        return prev.map((item) =>
          item.nom === nom ? { ...item, quantity } : item
        );
      }

      return [...prev, { nom, quantity, prix, img }];
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

 const handlePayment = async () => {
  if (!phone) {
    alert('Please enter a valid phone number.');
    return;
  }

  try {
    const response = await axios.post(
      'https://congolesemenu-backend.onrender.com//mpesa/stk',
      {
        phone,
        amount: total,
        items: cart.map(item => ({
        name: item.nom,
        price: item.prix,
        quantity: item.quantity,
        image: item.img,
    })),
      }
    );

    console.log(response.data);
    alert('STK Push sent! Please check your phone.📱');
  } catch (error) {
    console.error(error);
    alert('Payment error.');
  }
};


  return (
  <>
    <div className='menu'>
       {plats.map((plat) => (
         <Article
           key={plat.nom}
           nom={plat.nom}
           prix={plat.prix}
           img={plat.img}
           description={plat.description}
           onUpdate={handleUpdate}
          />
       ))}
      </div>
      <div className='menuPrice'>
        <hr />
      <h2>Total purchase.: {total} KES</h2>
      <input
         type="text"
         placeholder="2547XXXXXXXX"
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
       />
        <hr />
      {total > 0 && (
        <button onClick={handlePayment} className='MpesaBtn'>
          Pay with MPesa
        </button>
      )}
      <p>Thank you for your purchase, and enjoy your meal!</p>
      <a href="https://hubert-art.github.io/hub.objct-My-Portfolio/" target="_blank" rel="noopener noreferrer" className='about'>About?</a>
      <p className="Copyright">Copyright &#169; 2026 Congolese Culturel Food menu</p>
      </div>
  </>
  );
};

export default Menu;
