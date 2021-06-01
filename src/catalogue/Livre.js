import './Livre.css'
const truncateString = (str, num) => {
    if(str.length <= num){
        return str;
    }else{
return str.slice(0, num) + '...';
    }
}


const Livre = ({livre}) => {
  return (
    <div className="card mb-4 livre">
      <img
        className="card-img-top"
        src={livre.image}
        alt={'couverture' + livre.titre}
      />
      <div className="card-body">
        <h4 className="card-title">{livre.titre}</h4>
        <p className="card-text">{ truncateString(livre.resume, 100)}</p>
      <div className="card-text">
      <span className="livre-prix">
           {livre.prix}
      </span>        
      <button className="btn btn-warning mx-5">-&gt; Ajouter au panier </button>
      </div>
      </div>
    </div>
  );
};

export default Livre;
