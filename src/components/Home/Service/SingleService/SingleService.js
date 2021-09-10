import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {

    return (
        <div>

            
                <div className="single">
                    <div className="text-center">
                        <img src={service.img} alt="" />
                    <h4 className="pt-4 pb-2">{service.name}</h4>
                    </div>

                    <div className="single-cart d-flex justify-content-between align-items-center">
                        <h5 className="text-brand pb-4">${service.price}</h5>
                        <Link to={`/admin/book/${service._id}`}>
                         <button className="btn btn-primary">Buy Now</button>
                        </Link>  
                    </div>
                    
                </div>
                
            
        </div>
    );
};

export default SingleService;