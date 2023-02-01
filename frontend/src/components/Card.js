import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ plant }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-lg border justify-content-center">
        <img src={plant.Img} className="card-img-top plant-image" alt={1} />
        <div className="card-body bg-light rounded">
          <h5 className="card-title text-start text-dark lead">
            {plant['Common name'][0]}
          </h5>
          <p className="card-text text-start">
            <small className="text-muted">{plant.Categories}</small>
          </p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <Link to="#" className="btn btn-success">
                View details
              </Link>
            </div>
            <div className="col">
              <Link to="#" className="btn btn-success">
                Add plant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="col">
    //   {/* <Link to="#" className="text-decoration-none"> */}
    //   <div
    //     className="card h-100 shadow-lg border justify-content-center"
    //     // style={{ height: '18rem' }}
    //   >
    //     <img
    //       src={plant.img}
    //       className="card-img-top plant-image"
    //       alt={1}

    //       // style={{ height: '18rem' }}
    //     />
    //     <div className="card-body bg-light rounded">
    //       <h5 className="card-title text-start text-dark lead">
    //         {plant.commonName[0]}
    //       </h5>
    //       <p className="card-text text-start">
    //         <small className="text-muted">{plant.latinName}</small>
    //       </p>
    //     </div>
    //     <div className="card-footer">
    //       <div className="row">
    //         <div className="col">
    //           <Link to="#" className="btn btn-success">
    //             View details
    //           </Link>
    //         </div>
    //         <div className="col">
    //           <Link to="#" className="btn btn-success">
    //             Add plant
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* </Link> */}
    // </div>
  );
};

export default Card;
