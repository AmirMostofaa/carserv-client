import React from 'react';
import './Book.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Book = () => {
    const {id} = useParams();

    //console.log(id)
    const [serviceById, setServiceById] = useState([]);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        console.log("inside use effect", id)

        fetch(`https://desolate-ravine-13432.herokuapp.com/services/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setServiceById(data)
            setOrders(data)
        })

    }, [id])

    //console.log(serviceById.name, id)


    return (
        
        <div className="order-book">
            <h4 className="text-brand pb-3">Place Your Order</h4>
            <h5><strong>Service:</strong> {serviceById.name}</h5>
            <h5><strong>Price:</strong> ${serviceById.price}</h5>

            <div className="payment pt-4">
                <h5 className="pb-3 text-brand">Provide your Card Information</h5>
                <ProcessPayment serviceById={serviceById} orders={[orders, setOrders]}/>
            </div>
        </div>
    );
};

export default Book;