import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const Review = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data)
        const formData = {
            name: data.name,
            rating: data.rating,
            message: data.message
        }

        //console.log(formData)
        fetch('https://desolate-ravine-13432.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(result => {
            alert('Review Sent Successfully!')
        })

    };

  
    return (
        <div>
            <h4 className="text-brand">Write Your Review</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="w-75 pt-4">
                
                <input type="text" {...register("name")} placeholder="Name" className="form-control" name="name" required/>
                <br/>
                <input name="rating" {...register("rating")}  type="number" min="1" max="5" className="form-control" placeholder="Out of 5 ?"/>
                <br/>
                <textarea name="message" {...register("message")}  id="" cols="30" rows="3"  className="form-control" placeholder="Your Review" require></textarea>
                <br/>
                <input type="submit" value="Send" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Review;