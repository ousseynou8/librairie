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
    const cartFrontLocalStorage02 = JSON.parse(cartFrontLocalStorage);
    setCart(cartFrontLocalStorage02)
  }else{
    saveCartInLocalStorage({});
    setCart({});
  }


  // evenement quand l'onglet devient actif
const getSaveCart = (e) => {
if (document.visibilityState === 'visible'){
  const saveCart = JSON.parse(localStorage.getItem('cart'));
  if(saveCart){
    setCart(saveCart);
  }
}
};
document.addEventListener('visibilitychange', getSaveCart);

// fin 


// cleanup : liberer les ressources

return () => {
  // netoyer l'ecouter sur l'onglet actif
  document.removeEventListener('visibilitychange', getSaveCart);

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



  const qte = saveCart[livre.ean] ? saveCart[livre.ean].amount : 0;
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
            <LivresList addToCart={addToCart} />
          </div>
          <div className="col-sm-3">
          <Panier cart={cart} vider={clearCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
