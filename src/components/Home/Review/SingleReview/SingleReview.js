import React from 'react';
import './SingleReview.css';



const SingleReview = ({review}) => {

    

    return (
            
        <div className="single-review text-center m-2">
            
            <p>{review.message}</p>
            <h3>- {review.name}</h3>
                            
        </div>
    );
};

export default SingleReview;