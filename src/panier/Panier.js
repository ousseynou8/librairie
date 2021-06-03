const Panier = ({cart, vider}) => {
  const cartToJsx = () => {
    return Object.values(cart).map((ligne) => (
      <div key={ligne.ean}>
        {ligne.titre} : {ligne.prix} € x {ligne.amount}
      </div>
    ));
  };

  return (
    <div>
      <h2>Panier</h2>
      {Object.entries(cart).length === 0 && <div>Aucun article</div>}

      {cartToJsx()}

      {Object.entries(cart).length > 0 && (
        <div className="mt-4">
          <button className="btn btn-dark btn-sm" onClick={vider}>
            vider
          </button>
        </div>
      )}
    </div>
  );
};

export default Panier;
