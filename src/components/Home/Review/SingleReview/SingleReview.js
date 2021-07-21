import React from 'react';

import './SingleReview.css';

const SingleReview = ({review}) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div>
            
            <div className="single-review overflow-auto text-white">
                
                    
                <h3>{review.name}</h3>
                <p>{review.message}</p>
                    
                   
            </div>
            
        </div>
    );
};

export default SingleReview;