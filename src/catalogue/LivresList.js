import livres from '../datas/livres';
 import Livre from './Livre'

const LivresList = ({addToCart}) => {


const livresToJsx= (items) => items.map((item) =>
{
return <Livre key={item.ean} livre={item} addToCart={addToCart} />
})



  return (
    <div>
      <h1>Catalogue</h1>
      <div className="card-deck">
        {livresToJsx(livres)}
      </div>
    </div>
  );
};

export default LivresList;
