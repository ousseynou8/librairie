import Banniers from './bannieres/Banniers';
import LivresList from './catalogue/LivresList';
import Panier from './panier/Panier';

function App() {
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
