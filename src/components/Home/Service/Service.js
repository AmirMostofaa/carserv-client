import React from 'react';
import './Service.css';
import { useState } from 'react';
import SingleService from './SingleService/SingleService';
import { useEffect } from 'react';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://desolate-ravine-13432.herokuapp.com/services', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
        
        })
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [services])


    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center">
                        <h5>WHAT WE DO</h5>
                        <h4 className="text-brand">Our Services<br/> that we provide</h4>
                    </div>
                    </div>

                    <div className="col-md-12 pt-5">
                        <div className="row d-flex flex-wrap">

                        
                            {
                                services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;