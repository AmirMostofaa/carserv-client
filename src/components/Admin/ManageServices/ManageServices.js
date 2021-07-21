import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {

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
            <h4 className="text-brand">Manage Services </h4>

            <table className="table w-75 mt-3">
            <thead className="bg-brand text-white">
                <tr>
                
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>

                {
                    services.map(service =>  

                    <tr>
                    <td>{service.name}</td>
                    <td>$ {service.price}</td>
                    <td>
                        ..
                    </td>
                    </tr>

                ) }
                
            </tbody>
            </table>
                
        </div>
    );
};

export default ManageServices;