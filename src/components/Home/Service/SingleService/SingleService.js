import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {

    return (
        <div>

            <Link to={`/admin/book/${service._id}`}>
                <div className="single text-center">
                    <img src={service.img} alt="" />
                    <h4 className="pt-4 pb-2">{service.name}</h4>
                    <h5 className="text-brand pb-4">${service.price}</h5>
                </div>
            </Link>      
            
        </div>
    );
};

export default SingleService;