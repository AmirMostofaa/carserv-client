import React from 'react';
import './Review.css'
import reviewImg1 from '../../../images/quote.svg';
import reviewImg2 from '../../../images/testimonials.png';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleReview from './SingleReview/SingleReview';
// import Carousel from 'react-elastic-carousel'


const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://desolate-ravine-13432.herokuapp.com/reviews', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [reviews])



    return (
        
        <div className="container pt-5 pb-5">
            <div className="">
            
                <div className="row">
                    
                    <div className="col-md-5 review-left p-5">
                        <div className="team-title">
                            <h5 className="">Testimonials</h5>
                            <h4 className="text-brand pt-3 pb-3">What our Happy <br/> Client Says</h4>
                            <p>Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>
                         </div>
                    </div>
                    <div className="col-md-7 p-5 review-right">
                        <img className="reviewBg img-fluid" src={reviewImg2} alt=""  />
                        <img className="quote img-fluid" src={reviewImg1} alt=""  />
                        
                       <div className="carserv-carousel p-5 d-flex flex-row justify-content-center align-items-center overflow-auto">
                           
                            {
                                reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                            }
                       </div>

                    </div>

                    
                </div>
            </div>
            
        </div>
    );
};

export default Review;