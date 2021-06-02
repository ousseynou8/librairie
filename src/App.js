import {useEffect, useState} from 'react';
import Banniers from './bannieres/Banniers';
import LivresList from './catalogue/LivresList';
import Panier from './panier/Panier';

function App() {

// gestion panier : debut
const [cart, setCart] =  useState([]);


useEffect(() => {
  const cartFrontLocalStorage = localStorage.getItem('cart');
  if(cartFrontLocalStorage){
    const cartFrontLocalStorage = JSON.parse(cartFrontLocalStorage);
    setCart(cartFrontLocalStorage)
  }else{
    saveCartInLocalStorage({});
    setCart({});
  }
}, [setCart]);

const saveCartInLocalStorage =(newCart) => {
  const cartToJson = JSON.stringify(newCart);
  localStorage.setItem('cart', cartToJson);
}

const clearCart = (cart) => {
  setCart({});
  saveCartInLocalStorage({});
}

const addToCart = (livre) => {
  const saveCartJson = localStorage.getItem('cart');
  const saveCart = JSON.parse(saveCartJson);
  const qte = saveCartJson[livre.ean] ? saveCartJson[livre.ean].amount : 0;
  saveCart[livre.ean] = {...livre, amount: (qte + 1)};
  saveCartInLocalStorage(saveCart);
  setCart(saveCart);

}

// gestion panier : fin

  return (
    <>
      <Banniers />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <LivresList />
          </div>
          <div className="col-sm-3">
          <Panier />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
