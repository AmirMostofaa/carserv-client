import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');


const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null)

    const onSubmit = data => {
        //console.log(data)
        const formData = {
            name: data.service,
            price: data.price,
            img: imgURL
        }

        //console.log(formData)
        fetch('https://desolate-ravine-13432.herokuapp.com/addService', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(result => {
            alert('Service Added Successfully!')
        })

    };

    const handleImgUpload = (e) => {
        //console.log(e.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', 'a2cff836a414818769a21e5f4e631d15');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImgURL(response.data.data.display_url)
            //console.log(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }




    return (
        <div>
            <h4 className="text-brand">Add Service</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 pt-4">
                
                <input type="text" {...register("service")} placeholder="Service Name" className="form-control" name="service" required/>
                <br/>
                <input type="number" {...register("price")} placeholder="Price" className="form-control" name="price" required/>
                <br/>
                <input type="file"  className="form-control" onChange={handleImgUpload} required/>
                <br/>
                
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default AddService;