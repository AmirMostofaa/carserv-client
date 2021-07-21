import React from 'react';
import './ChooseItem.css';

const ChooseItem = ({choose}) => {
    return (
        
        <div className="chooseItem d-flex align-items-center w-50">
            <img src={choose.img} alt="" />
            <div className="choose-info">
                <h4>{choose.title}</h4>
                <p>{choose.description}</p>
            </div>
        </div>
    );
};

export default ChooseItem;