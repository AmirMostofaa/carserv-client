import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const BookingList = () => {

    const [loggedInUser] = useContext(UserContext)
    const [ordersViaEmail, setOrdersViaEmail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4040/orderViaEmail?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setOrdersViaEmail(data))
    }, [loggedInUser.email])

    //console.log(ordersViaEmail)

    return (
        <div>

            <div className="welcome-user pb-4 text-center">
                <h4 className="text-brand">Welcome Back,</h4>
                <img src={loggedInUser.image} alt="" />
                <h4 style={{fontSize: '30px'}}>{loggedInUser.name}</h4>
            </div>

            <h5 className="text-brand">Your Previous Order List</h5>

            <table className="table">
                <thead className="bg-brand text-white">
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersViaEmail.map(order => (
                            <tr>
                                <td>{order[0].[0].name}</td>
                                <td>${order[0].[0].price}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default BookingList;