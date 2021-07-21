import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
    const [serviceById, setServiceById] = useState({});

    useEffect(() => {
        fetch(`https://desolate-ravine-13432.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [id])

    //console.log(serviceById)


    return (
        
        <div>
            <h4>This is Book</h4>
            <h5>{serviceById.name} Is Updating...</h5>
        </div>
    );
};

export default Book;