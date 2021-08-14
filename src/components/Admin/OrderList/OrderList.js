import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderList = () => {

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4040/orderList', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])
    
    return (
        <div>
            <h4 className="text-brand">Order List</h4>

            <table className="table">
                <thead className="bg-brand text-white">
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Customer Email</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orderList.map(orderL => (
                            <tr>
                                <td>{orderL[0].[0].name}</td>
                                <td>${orderL[0].[0].price}</td>
                                <td>{orderL.email}</td>
                                <td>{orderL.name}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    );
};

export default OrderList;