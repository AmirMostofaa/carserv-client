import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const MakeAdmin = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null)

    const onSubmit = data => {
        //console.log(data)
        const formData = {
            name: data.name,
            email: data.email,
            img: imgURL
        }

        //console.log(formData)
        fetch('https://desolate-ravine-13432.herokuapp.com/addTeam', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(result => {
            alert('Team/Admin Added Successfully!')
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
            <h4 className="text-brand">Add Team/Make Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 pt-4">
                
                <input type="text" {...register("name")} placeholder="Name" className="form-control" name="name" required/>
                <br/>
                <input type="text" {...register("email")} placeholder="Email" className="form-control" name="email" required/>
                <br/>
                <input type="file"  className="form-control" onChange={handleImgUpload} required/>
                <br/>
                
                <input type="submit" value="Add Team" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default MakeAdmin;